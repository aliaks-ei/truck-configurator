<template>
    <b-navbar class="topbar">
        <b-navbar-brand>
            <img 
                src = "@/assets/images/logo.png" 
                alt = "Application logo" 
            />
        </b-navbar-brand>

        <b-navbar-nav align="center">
            <search-field></search-field>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
    import SearchField from './SearchField.vue';

    export default {
        name       : 'TopBar',
        components : { SearchField }
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

</style>
