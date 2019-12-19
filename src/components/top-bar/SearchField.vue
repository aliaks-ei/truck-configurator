<template>
    <b-nav-text class="search-input-wrapper">
        <b-form-input 
            class       = "search-input rounded-pill"
            placeholder = "Search here"
            :disabled   = "isCombinationsPage"
            :value      = "searchQuery"
            @input      = "updateSearchQuery"
        ></b-form-input>

        <i class="search-input__search-icon material-icons text-primary"> search </i>
    </b-nav-text>
</template>

<script>
    import { mapActions, mapMutations, mapState } from 'vuex';

    import helpers from '@/utils/helpers';

    export default {
        name     : 'SearchField',
        computed : {
            ...mapState([ 'isCombinationsPage', 'searchQuery' ])
        },
        watch: {
            searchQuery() {
                this.searchByQuery();
            }
        },
        methods: {
            ...mapActions([ 'readInternalTruckElems', 'readExternalTruckElems' ]),
            ...mapMutations([ 'updateSearchQuery' ]),

            searchByQuery: helpers.debouncedMethod(
                async function searchForTruckElems() {
                    const readInternalElems = this.readInternalTruckElems();
                    const readExternalElems = this.readExternalTruckElems();

                    await Promise.all([readInternalElems, readExternalElems]);
                }, 
                300
            )
        }
    };
</script>

<style lang="scss" scoped>

    .search-input-wrapper {
        position : relative;
        height   : 100%;
        width    : 100%;
        padding  : 0;
    }

    .search-input {
        height  : 100%;
        width   : 100%;
        padding : 0.375rem 4rem 0.375rem 1.5rem;
        border  : 1px solid var(--secondary);
    }

    .search-input__search-icon {
        position  : absolute;
        right     : 1.5rem;
        top       : 50%;
        transform : translateY(-50%);
        font-size : 2rem;
    }

    @media (max-width: 576px) {
        .search-input {
            font-size : 14px;
            padding   : 0.25rem 3rem 0.25rem 1rem;
        }

         .search-input__search-icon {
            right     : 1rem;
            font-size : 1.5rem;
        }
    }

</style>
