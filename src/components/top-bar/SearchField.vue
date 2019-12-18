<template>
    <b-nav-text class="position-relative">
        <b-form-input 
            class       = "search-input rounded-pill"
            v-model     = "searchQuery" 
            placeholder = "Search here"
            @input      = "searchByQuery"
        ></b-form-input>

        <i class="search-input__search-icon material-icons text-primary"> search </i>
    </b-nav-text>
</template>

<script>
    import { mapActions } from 'vuex';

    import helpers from '@/utils/helpers';

    export default {
        name: 'SearchField',
        data() {
            return {
                searchQuery: ''
            };
        },
        methods: {
            ...mapActions([ 'readInternalTruckElems', 'readExternalTruckElems' ]),

            searchByQuery: helpers.debouncedMethod(
                async function searchForTruckElems(searchStr = '') {
                    await this.readInternalTruckElems(searchStr);
                    await this.readExternalTruckElems(searchStr);
                }, 
                300
            )
        }
    };
</script>

<style lang="scss" scoped>

    .search-input {
        height  : 3.5rem;
        width   : 600px;
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

</style>
