<template>
    <div class="selections-block">
        <h3 class="font-weight-light"> Your selection </h3>

        <div class="selections-block__items">
            <selection
                v-for         = "truckElem in selectedElems.internalElements"
                :key          = "truckElem.name"
                :title        = "truckElem.name"
                @closeClicked = "handleCloseIconClick({ elem: truckElem, isExternal: false })"
            ></selection>

            <selection
                v-for         = "truckElem in selectedElems.externalElements"
                :key          = "truckElem.name"
                :title        = "truckElem.name"
                @closeClicked = "handleCloseIconClick({ elem: truckElem, isExternal: true })"
                external
            ></selection>
        </div>

        <span 
            class  = "selections-block__unselect-btn"
            v-if   = "selectedTruckElemsLength && !isCombinationsPage"
            @click = "unselectAll"
        > 
            Unselect all 
        </span>
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

    import Selection from './SelectionsBlockSelection.vue';

    export default {
        name       : 'SelectionsBlock',
        components : { Selection },
        computed   : {
            ...mapGetters([ 'selectedTruckElemsLength' ]),
            ...mapState([ 'isCombinationsPage', 'selectedElems' ])
        },
        methods: {
            ...mapActions([ 'readPossibleCombinations' ]),
            ...mapMutations([ 
                'clearAllSelections', 
                'removeTruckElemFromSelected',
                'updateCombinationsPageState',
                'updateSearchQuery' 
            ]),

            handleCloseIconClick({ elem, isExternal }) {
                this.removeTruckElemFromSelected({ elem, isExternal });
                
                !this.selectedTruckElemsLength  && this.updateCombinationsPageState();
                this.isCombinationsPage && this.readPossibleCombinations();
            },

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
        flex           : 0 1 75%;
        flex-direction : column;
        margin-top     : .5rem;
    }

    .selections-block__unselect-btn {
        font-style      : italic;
        font-weight     : 600;
        align-self      : flex-start;
        color           : var(--danger);
        text-decoration : underline;
        cursor          : pointer;
        margin-top      : auto;
    }

</style>
