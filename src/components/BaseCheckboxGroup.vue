<template>
    <b-form-group
        class  = "checkbox-group-wrapper"
        :label = "label"
    >
        <b-form-checkbox-group
            class    = "checkbox-group"
            v-model  = "selected"
            :options = "options"
            stacked
        ></b-form-checkbox-group>
    </b-form-group>
</template>

<script>
    export default {
        name  : 'BaseCheckboxGroup',
        props : {
            label: {
                type     : String,
                required : false,
                default  : ''
            }
        },
        data() {
            return {
                selected : [], 
                options  : [
                    { text: 'Orange', value: 'orange' },
                    { text: 'Apple', value: 'apple' },
                    { text: 'Pineapple', value: 'pineapple' },
                    { text: 'Grape', value: 'grape' }
                ]
            };
        }
    };
</script>

<style lang="scss" scoped>

    .checkbox-group-wrapper > :first-child {
        font-size   : 1.75rem;
        font-weight : 300;
        outline     : none;
    }

    .checkbox-group {
        outline: none;
    }

</style>
