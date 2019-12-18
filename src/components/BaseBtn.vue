<template>
    <b-button 
        class    = "base-btn"
        :variant = "variant"
        squared
    > 
        <slot></slot>
    </b-button>
</template>

<script>
    export default {
        name  : 'BaseBtn',
        props : {
            variant: {
                type     : String,
                required : false,
                default  : 'primary'
            }
        }
    };
</script>

<style lang="scss" scoped>

    .base-btn {
        display        : flex;
        align-self     : center;
        align-items    : center;
        font-weight    : 700;
        padding        : 1.5rem 2rem;
        text-transform : uppercase;
    }

</style>
