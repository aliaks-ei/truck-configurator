<template>
    <b-container 
        class = "search-results" 
        fluid
    >
        <b-row class="h-100">
            <!-- Internal -->
            <b-col 
                class = "search-results__column" 
                md    = "6"
            > 
                <base-checkbox-group label="Internal"></base-checkbox-group>
            </b-col>
            
            <!-- External -->
            <b-col 
                class = "search-results__column" 
                md    = "6"
            > 
                <base-checkbox-group label="External"></base-checkbox-group>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import BaseCheckboxGroup from './BaseCheckboxGroup.vue';

    export default {
        name       : 'SearchResults',
        components : {
            BaseCheckboxGroup
        }
    };
</script>

<style lang="scss" scoped>

    .search-results {
        height     : calc(100% - var(--topbar-height) - var(--bottombar-height));
        margin     : var(--topbar-height) 0 var(--bottombar-height);
        overflow-y : auto;
    }

    .search-results__column {
        padding: 2rem;
    }

    .search-results__column:first-of-type {
        border-right: 1px solid var(--secondary);

        @media (max-width: 768px) {
            border-right  : 0;
            border-bottom : 1px solid var(--secondary);     
        }
    }

</style>
