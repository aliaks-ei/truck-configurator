<template>
	<div id="app">
		<top-bar></top-bar>

		<main class="main">
			<combinations-table v-if="isCombinationsPage"></combinations-table>
			<search-results v-else></search-results>
		</main>

		<bottom-bar></bottom-bar>
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	import BottomBar         from './components/bottom-bar/BottomBar.vue';
	import CombinationsTable from './components/truck-elems/CombinationsTable.vue';
	import SearchResults     from './components/truck-elems/FoundedTruckElems.vue';
	import TopBar            from './components/top-bar/TopBar.vue';

	export default {
		name       : 'app',
		components : {
			BottomBar,
			CombinationsTable,
			SearchResults,
			TopBar
		},
		computed: {
			...mapState([ 'isCombinationsPage' ])
		}
	};
</script>

<style lang="scss">

	#app {
		width                   : 100%;
		height                  : 100%;
		-webkit-font-smoothing  : antialiased;
		-moz-osx-font-smoothing : grayscale;
	}

	.main {
		height     : calc(100% - var(--topbar-height));
		margin     : var(--topbar-height) 0 0;
		overflow-y : auto;
	}

</style>
