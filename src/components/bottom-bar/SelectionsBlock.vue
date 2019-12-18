<template>
    <div class="selections-block">
        <h3 class="font-weight-light"> Your selection </h3>

        <div class="selections-block__items">
            <span v-if="!selectedTruckElemsLength"> Search elements to select items. </span>

            <div v-else>
                <selection
                    v-for = "truckElem in selectedElems.internalElements"
                    :key  = "truckElem.name"
                    :item = "truckElem"
                ></selection>

                <selection
                    v-for = "truckElem in selectedElems.externalElements"
                    :key  = "truckElem.name"
                    :item = "truckElem"
                    external
                ></selection>
            </div>
        </div>

        <span 
            class  = "selections-block__unselect-btn"
            v-if   = "selectedTruckElemsLength && !combinations.length"
            @click = "unselectAll"
        > 
            Unselect all 
        </span>
    </div>
</template>

<script>
    import { mapGetters, mapMutations, mapState } from 'vuex';

    import Selection from './SelectionsBlockSelection.vue';

    export default {
        name       : 'SelectionsBlock',
        components : { Selection },
        computed   : {
            ...mapGetters([ 'selectedTruckElemsLength' ]),
            ...mapState([ 'combinations', 'selectedElems' ])
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
