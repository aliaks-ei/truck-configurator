<template>
    <div class="selections-block">
        <div class="selections-block__title"> Your selection </div>

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

    .selections-block__title {
        font-size   : 1.75rem;
        font-weight : 300;
    }

    .selections-block__unselect-btn {
        font-style      : italic;
        color           : var(--danger);
        text-decoration : underline;
        cursor          : pointer;
        margin-top      : auto;
    }

</style>
