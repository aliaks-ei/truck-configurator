<template>
    <b-button 
        class     = "base-btn"
        :disabled = "disabled"
        :variant  = "variant"
        squared
    > 
        <slot></slot>
    </b-button>
</template>

<script>
    export default {
        name  : 'BaseBtn',
        props : {
            disabled: {
                type     : Boolean,
                required : false,
                default  : false
            },
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
        flex-shrink    : 0;
        align-self     : center;
        align-items    : center;
        font-weight    : 700;
        padding        : 1.5rem 2rem;
        text-transform : uppercase;
    }

</style>
