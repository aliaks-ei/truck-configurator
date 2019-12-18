<template>
    <b-form-group
        class  = "checkbox-group-wrapper"
        :label = "label"
    >
        <b-form-checkbox-group
            class    = "checkbox-group"
            v-model  = "selected"
            size     = "lg"
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

<style lang="scss">

    .checkbox-group-wrapper > :first-child {
        font-size   : 1.75rem;
        font-weight : 300;
        outline     : none;
    }

    .checkbox-group {
        margin-top : .25rem;
        outline    : none;

        .custom-control-label {
            cursor: pointer;

            &:before {
                background-color: #d2e4f4;
            }
        }

        .custom-checkbox.b-custom-control-lg {
            line-height: 1.7;

            &:not(:last-of-type) {
                margin-bottom: .5rem;
            }

            .custom-control-label:before,
            .custom-control-label:after {
                width  : 1.5rem;
                height : 1.5rem;
            }

            span {
                font-size   : 1rem;
                margin-left : .25rem;
            }
        }
    }

</style>
