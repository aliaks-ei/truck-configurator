<template>
    <footer class="bottom-bar">
        <!-- Selections -->
        <selections-block></selections-block>

        <!-- Back button -->
        <base-btn
            v-if          = "combinations.length"
            variant       = "dark"
            @click.native = "fillCombinations"
        >
            Back
        </base-btn>

        <!-- View combinations button -->
        <base-btn 
            :disabled     = "!selectedTruckElemsLength"
            @click.native = "readPossibleCombinations" 
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
            ...mapState([ 'combinations' ])
        },
        methods: {
            ...mapActions([ 'readPossibleCombinations' ]),
            ...mapMutations([ 'fillCombinations' ])
        }
    };
</script>

<style lang="scss" scoped>

    .bottom-bar {
        position         : fixed;
        bottom           : 0;
        left             : 0;
        right            : 0;
        display          : flex;
        justify-content  : space-between; 
        padding          : 1.25rem 2.5rem;
        height           : var(--bottombar-height); 
        background-color : #ffffff;
        box-shadow       : 0px -3px 5px -1px rgba(0, 0, 0, 0.1), 
                           0px -5px 8px 0px rgba(0, 0, 0, 0.1), 
                           0px -1px 18px 0px rgba(0, 0, 0, 0.12);
    }

</style>
