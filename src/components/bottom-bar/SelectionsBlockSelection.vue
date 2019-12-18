<template>
    <div class="selection"> 
        <span> {{ item.name }} </span> 

        <i 
            class  = "material-icons selection__close-icon"
            @click = "removeTruckElemFromSelected({ elem: item, isExternal: external })"
        > 
            close 
        </i>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        name  : 'Selection',
        props : {
            external: {
                type     : Boolean,
                required : false,
                default  : false
            },
            item: {
                type     : Object,
                required : false,
                default() {
                    return {};
                }
            }
        },
        methods: {
            ...mapMutations([ 'removeTruckElemFromSelected' ])
        }
    };
</script>

<style lang="scss" scoped>

    .selection {
        display     : inline-flex;
        align-items : center;

        &:not(:last-of-type) {
            margin-right: 1rem;
        }
    }

    .selection__close-icon {
        font-size   : 1.1rem;
        font-weight : 600;
        margin-left : .2rem;
        margin-top  : .2rem;
        cursor      : pointer;
    }

</style>
