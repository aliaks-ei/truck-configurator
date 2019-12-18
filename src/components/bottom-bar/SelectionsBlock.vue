<template>
    <div class="selections-block">
        <h3 class="font-weight-light"> Your selection </h3>

        <div class="selections-block__items">
            Search elements to select items.
        </div>

        <div 
            class = "selections-block__unselect-btn"
        > 
            Unselect all 
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SelectionsBlock'
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
