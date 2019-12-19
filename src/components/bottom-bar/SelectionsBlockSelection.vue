<template>
    <div class="selection"> 
        <span> {{ title }} </span> 

        <i 
            class  = "material-icons selection__close-icon"
            @click = "$emit('closeClicked')"
        > 
            close 
        </i>
    </div>
</template>

<script>
    export default {
        name  : 'Selection',
        props : {
            title: {
                type     : String,
                required : false,
                default  : ''
            }
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

    @media (max-width: 992px) {
        .selection {
            font-size: 14px;
        }  
        
        .selection__close-icon {
            font-size: 1rem;
        }
    }

    @media (max-width: 992px) {
        .selection {
            font-size: 12px;
        }  

        .selection:not(:last-of-type) {
            margin-right: .5rem;
        }
        
        .selection__close-icon {
            font-size  : .8rem;
            margin-top : .1rem;
        }
    }

</style>
