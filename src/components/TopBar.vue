<template>
    <b-navbar class="topbar">
        <b-navbar-brand>
            <img 
                src = "@/assets/images/logo.png" 
                alt = "Application logo" 
            />
        </b-navbar-brand>

        <b-navbar-nav>
            <b-nav-text class="topbar__search-wrapper" center>
                <b-form-input 
                    class       = "search-input rounded-pill"
                    v-model     = "text" 
                    placeholder = "Search here"
                ></b-form-input>

                <i class="search-input__search-icon material-icons text-primary"> search </i>
            </b-nav-text>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
    export default {
        name: 'TopBar',
        data() {
            return {
                text: ''
            };
        }
    };
</script>

<style lang="scss" scoped>

    .topbar {
        position         : fixed;
        top              : 0;
        right            : 0;
        left             : 0;
        z-index          : 1;
        height           : var(--topbar-height);
        padding          : 1.5rem 2.5rem;
        border-bottom    : 1px solid var(--secondary);
        background-color : #ffffff;
    }

    .topbar__search-wrapper {
        position: relative;
    }

    .search-input {
        height  : 3.5rem;
        width   : 600px;
        padding : 0.375rem 4rem 0.375rem 1.5rem;
        border  : 1px solid var(--secondary);
    }

    .search-input__search-icon {
        position  : absolute;
        right     : 1.5rem;
        top       : 50%;
        transform : translateY(-50%);
        font-size : 2rem;
    }

</style>
