<template>
    <footer class="bottom-bar">
        <div>asdf</div>

        <b-button 
            class   = "view-combinations-btn"
            variant = "primary"
            squared
        > 
            <span> View combinations </span>

            <i class="material-icons"> arrow_forward </i>
        </b-button>
    </footer>
</template>

<script>
    export default {
        name: 'BottomBar'
    };
</script>

<style lang="scss" scoped>

    .bottom-bar {
        position        : fixed;
        bottom          : 0;
        left            : 0;
        right           : 0;
        display         : flex;
        align-items     : center;
        justify-content : space-between; 
        padding         : 2.5rem;
        box-shadow      : 0px -3px 5px -1px rgba(0, 0, 0, 0.1), 
                          0px -5px 8px 0px rgba(0, 0, 0, 0.1), 
                          0px -1px 18px 0px rgba(0, 0, 0, 0.12);
    }

    .view-combinations-btn {
        display        : flex;
        align-items    : center;
        font-weight    : 600;
        padding        : 1.5rem 2rem;
        text-transform : uppercase;

        .material-icons {
            margin-left: .5rem;
        }
    }

</style>
