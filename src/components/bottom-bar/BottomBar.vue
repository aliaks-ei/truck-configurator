<template>
    <footer 
        class  = "bottom-bar"
        :class = "{ 'bottom-bar--shown': selectedTruckElemsLength }"
    >
        <!-- Selections -->
        <selections-block></selections-block>

        <!-- Back button -->
        <base-btn
            v-if          = "isCombinationsPage"
            variant       = "dark"
            @click.native = "updateCombinationsPageState(false)"
        >
            Back
        </base-btn>

        <!-- View combinations button -->
        <base-btn 
            @click.native = "readPossibleCombinations" 
            :disabled     = "isViewCombinationsBtnDisabled"
            v-else
        >
            <span> View combinations </span>

            <i class="material-icons ml-2"> arrow_forward </i>
        </base-btn>
    </footer>
</template>

<script>
    import { mapActions, mapGetters, mapState, mapMutations } from 'vuex';

    import BaseBtn         from '../base/BaseBtn.vue';
    import SelectionsBlock from './SelectionsBlock.vue';

    export default {
        name       : 'BottomBar',
        components : {
            BaseBtn,
            SelectionsBlock
        },
        computed: {
            ...mapGetters([ 'selectedTruckElemsLength' ]),
            ...mapState([ 'isCombinationsPage', 'selectedElems' ]),

            isViewCombinationsBtnDisabled() {
                const { internalElements, externalElements } = this.selectedElems;

                return !(internalElements.length && externalElements.length);
            }
        },
        methods: {
            ...mapActions([ 'readPossibleCombinations' ]),
            ...mapMutations([ 'updateCombinationsPageState' ])
        }
    };
</script>

<style lang="scss" scoped>

    .bottom-bar {
        --bottombar-height: 11rem;
        
        position         : fixed;
        bottom           : 0;
        left             : 0;
        right            : 0;
        display          : flex;
        justify-content  : space-between; 
        padding          : 1rem 2.5rem;
        height           : var(--bottombar-height); 
        background-color : #ffffff;
        transform        : translateY(var(--bottombar-height));
        transition       : transform 700ms cubic-bezier(0.25, 0.8, 0.25, 1);
        will-change      : transform;
        box-shadow       : 0px -3px 5px -1px rgba(0, 0, 0, 0.1), 
                           0px -5px 8px 0px rgba(0, 0, 0, 0.1), 
                           0px -1px 18px 0px rgba(0, 0, 0, 0.12);

        @media (max-width: 992px) {
            padding: 1rem 2rem;
        }

        @media (max-width: 768px) {
            padding: .5rem 1.25rem;
        }
    }

    .bottom-bar--shown {
        transform: translateY(0);
    }

</style>
