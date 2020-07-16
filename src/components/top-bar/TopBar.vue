<template>
	<b-navbar class="topbar">
		<b-navbar-brand class="topbar__logo-wrapper">
			<img
				class = "topbar__logo"
				src   = "@/assets/images/logo.png"
				alt   = "Application logo"
			/>
		</b-navbar-brand>

		<b-navbar-nav class="topbar__search-field">
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
		justify-content  : center;
		height           : var(--topbar-height);
		padding          : 1.5rem 2.5rem;
		border-bottom    : 1px solid var(--secondary);
		background-color : #ffffff;
	}

	.topbar__logo-wrapper {
		position : absolute;
		left     : 2.5rem;
	}

	.topbar__search-field {
		height : 3.5rem;
		flex   : 0 1 700px;
	}

	@media (max-width: 1200px) {
		.topbar {
			justify-content: flex-end;
		}

		.topbar__logo-wrapper {
			position : relative;
			left     : 0;
		}

		.topbar__search-field {
			margin-left: auto;
		}
	}

	@media (max-width: 768px) {
		.topbar {
			padding: 1rem 1.5rem;
		}

		.topbar__logo {
			width: 95%;
		}

		.topbar__search-field {
			height: 3rem;
		}
	}

	@media (max-width: 576px) {
		.topbar {
			flex-direction  : column;
			justify-content : space-between;
			padding         : .5rem 1rem;
		}

		.topbar__logo-wrapper {
			margin-right : 0;
			text-align   : center;
		}

		.topbar__logo {
			width: 70%;
		}

		.topbar__search-field {
			margin : auto;
			flex   : 0 0 2rem;
			height : 2rem;
			width  : 100%;
		}
	}

</style>
