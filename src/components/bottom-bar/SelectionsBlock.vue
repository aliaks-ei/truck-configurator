<template>
    <div class="selections-block">
        <h3 class="font-weight-light"> Your selection </h3>

        <div class="selections-block__items">
            <span v-if="!truckElems.length"> Search elements to select items. </span>

            <selection
                v-for  = "truckElem in truckElems"
                :key   = "truckElem.name"
                :title = "truckElem.name"
                v-else
            ></selection>
        </div>

        <div 
            class  = "selections-block__unselect-btn"
            v-if   = "truckElems.length"
            @click = "unselectAll"
        > 
            Unselect all 
        </div>
    </div>
</template>

<script>
    import { mapMutations, mapState } from 'vuex';

    import Selection from './SelectionsBlockSelection.vue';

    export default {
        name       : 'SelectionsBlock',
        components : { Selection },
        computed   : {
            ...mapState([ 'selectedElems' ]),

            truckElems() {
                const { internalElements, externalElements } = this.selectedElems;

                return [...internalElements, ...externalElements];
            }
        },
        methods: {
            ...mapMutations([ 'clearAllSelections', 'updateSearchQuery' ]),

            unselectAll() {
                this.updateSearchQuery();
                this.clearAllSelections();
            }
        }
    };
</script>

<style lang="scss" scoped>

    .selections-block {
        display        : flex;
        flex-direction :  column;
    }

    .selections-block__unselect-btn {
        font-style      : italic;
        font-weight     : 600;
        color           : var(--danger);
        text-decoration : underline;
        cursor          : pointer;
        margin-top      : auto;
    }

</style>
