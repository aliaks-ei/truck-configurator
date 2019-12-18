<template>
    <div> {{ title }} </div>
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
