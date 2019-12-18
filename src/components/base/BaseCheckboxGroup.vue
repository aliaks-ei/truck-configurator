<template>
    <b-form-group
        class  = "checkbox-group-wrapper"
        :label = "label"
    >
        <b-form-checkbox-group 
            class  = "checkbox-group"
            :value = "selectedTruckElems(external)"
            stacked
        >
            <b-form-checkbox
                class   = "base-checkbox"
                v-for   = "option in options"
                :key    = "option.name"
                :value  = "option"
                @change = "selectTruckElem(Boolean($event), option)"
            >
                {{ option.name }}
            </b-form-checkbox>
        </b-form-checkbox-group>
    </b-form-group>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        name  : 'BaseCheckboxGroup',
        props : {
            external: {
                type     : Boolean,
                required : false,
                default  : false
            },
            label: {
                type     : String,
                required : false,
                default  : ''
            },
            options: {
                type     : Array,
                required : false,
                default() {
                    return [];
                }
            }
        },
        computed: {
            ...mapGetters([ 'selectedTruckElems' ])
        },
        methods: {
            ...mapMutations([ 
                'addTruckElemToSelected',
                'removeTruckElemFromSelected' 
            ]),

            selectTruckElem(isSelected, elem) {
                if (isSelected) {
                    this.addTruckElemToSelected({ elem, isExternal: this.external });
                }
                else {
                    this.removeTruckElemFromSelected({ elem, isExternal: this.external });
                }
            }
        }
    };
</script>

<style lang="scss">

    .checkbox-group-wrapper > :first-child {
        font-size   : 1.75rem;
        font-weight : 300;
    }

    .checkbox-group {
        outline: none;
    }

    .base-checkbox.custom-control {
        line-height  : 2;
        padding-left : 2.25rem;

        &:not(:last-of-type) {
            margin-bottom: .5rem;
        }

        .custom-control-label {
            cursor: pointer;

            &:before {
                background-color: #d2e4f4;
            }

            &:before,
            &:after {
                width       : 1.5rem;
                height      : 1.5rem;
                margin-left : -0.75rem;
            }
        }
    }

</style>
