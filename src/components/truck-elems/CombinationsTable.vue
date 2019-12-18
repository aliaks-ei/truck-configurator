<template>
    <div class="combinations-wrapper">
        <h3 class="font-weight-light"> Possible Combinations Table </h3>

        <b-table 
            class   = "combinations-table"
            :items  = "combinations"
            :fields = "fields"
            bordered
            borderless
        ></b-table>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data() {
            return {
                fields: [
                    {
                        key     : 'internal',
                        thClass : 'combinations-table__th'
                    },
                    {
                        key     : '+',
                        thClass : 'combinations-table__th'
                    },
                    {
                        key     : 'external',
                        thClass : 'combinations-table__th'
                    }
                ]
            };
        },
        computed: {
            ...mapState([ 'combinations' ])
        }
    };
</script>

<style lang="scss">

    .combinations-wrapper {
        display         : flex;
        align-items     : center;
        flex-direction  : column;
        height          : 100%;
        padding         : 2rem;
    }

    table.combinations-table {
        text-align    : center;
        max-width     : 800px;
        width         : 90%;
        margin-bottom : 0;
        margin-top    : 1rem;

        .combinations-table__th {
            font-size   : 1.75rem;
            font-weight : 300;
            color       : #aaafb4;
        }

        .combinations-table__th:nth-of-type(2) {
            padding   : 0;
            font-size : 2.25rem;
        }
    }

</style>
