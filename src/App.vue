<template>
	<div id="app">
		<top-bar></top-bar>
		<search-results></search-results>
		<bottom-bar></bottom-bar>
	</div>
</template>

<script>
	import BottomBar     from './components/BottomBar.vue';
	import SearchResults from './components/SearchResults.vue';
	import TopBar        from './components/TopBar.vue';

	export default {
		name       : 'app',
		components : {
			BottomBar,
			SearchResults,
			TopBar
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
	
</style>
