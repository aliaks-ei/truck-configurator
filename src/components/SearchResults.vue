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
                <h3 class="font-weight-light"> Internal </h3>

                <div class="mt-3">
                    
                </div>
            </b-col>
            
            <!-- External -->
            <b-col 
                class = "search-results__column" 
                md    = "6"
            > 
                <h3 class="font-weight-light"> External </h3>

                <div class="mt-3">
                    
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'SearchResults'
    };
</script>

<style lang="scss" scoped>

    .search-results {
        height     : calc(100% - var(--topbar-height) - var(--bottombar-height));
        margin     : var(--topbar-height) 0 var(--bottombar-height);
        overflow-y : auto;
    }

    .search-results__column {
        padding: 3rem 2rem;

        &:first-of-type {
            border-right: 1px solid var(--secondary);

            @media (max-width: 768px) {
                border-right  : 0;
                border-bottom : 1px solid var(--secondary);     
            }
        }
    }

</style>
