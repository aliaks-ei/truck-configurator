<template>
    <div class="combinations-wrapper">
        <h3 class="combinations-wrapper__title"> Possible Combinations Table </h3>

        <!-- Confirmations table -->
        <div class="confirmations-table-wrapper">
            <table class="combinations-table">
                <thead>
                    <th class="combinations-table__th"> Internal </th>
                    <th class="combinations-table__th"> <i class="material-icons"> add </i> </th>
                    <th class="combinations-table__th"> External </th>
                </thead>
                <tbody v-if="combinations.length">
                    <tr
                        class = "combinations-table__tr"
                        v-for = "(combination, index) in combinations"
                        :key  = "index"
                    >
                        <td> {{ combination.internal }} </td>
                        <td></td>
                        <td> {{ combination.external }} </td>
                    </tr>
                </tbody>

                <td 
                    class   = "combinations-table__no-results"
                    colspan = "3" 
                    v-else
                >
                    No combinations found
                </td>
            </table>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
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
        padding         : 2.5rem 2rem; 
    }

    .combinations-wrapper__title {
        font-size   : 1.75rem;
        font-weight : 300;
        text-align  : center;
    }

    .confirmations-table-wrapper {
        max-width : 800px;
        width     : 90%;
        height    : 90%;
        margin    : 1rem auto 0;
        border    : 1px solid var(--secondary);
    }

    .combinations-table {
        text-align : center;
        width      : 100%;

        .combinations-table__th {
            font-size   : 1.75rem;
            font-weight : 300;
            color       : #aaafb4;
            padding-top : .5rem;
        }

        .combinations-table__th:nth-of-type(2) {
            padding-top    : 2rem;
            padding-bottom : 0;

            .material-icons {
                font-size   : 2rem;
                font-weight : 300;
            }
        }

        .combinations-table__tr {
            height: 3rem;
        }

        .combinations-table__no-results {
            font-size   : 2rem;
            font-weight : 300;
            padding-top : 5rem;
        }
    }

    @media (max-width: 768px) {
        .combinations-wrapper {
            padding: 1.5rem 2rem;
        }

        .combinations-wrapper__title {
            font-size: 1.5rem;
        }

        .confirmations-table-wrapper {
            width: 100%;
        }
        
        .combinations-table {
            .combinations-table__th {
                font-size   : 1.5rem;
                padding-top : .25rem;
            }

            .combinations-table__th:nth-of-type(2) {
                padding-top: 1rem;

                .material-icons {
                    font-size: 1.5rem;
                }
            }

            .combinations-table__tr {
                height    : 2rem;
                font-size : 14px;
            }
        }
    }

    @media (max-width: 576px) {
        .combinations-wrapper {
            padding: 1rem;
        }

        .combinations-wrapper__title {
            font-size: 1.25rem;
        }

        .confirmations-table-wrapper {
            margin-top: .5rem;
        }
        
        .combinations-table {
            .combinations-table__th {
                font-size   : 1.25rem;
                padding-top : .25rem;
            }

            .combinations-table__th:nth-of-type(2) {
                padding-top: .75rem;

                .material-icons {
                    font-size: 1.25rem;
                }
            }

            .combinations-table__tr {
                height    : 1.75rem;
                font-size : 12px;
            }
        }
    }

</style>
