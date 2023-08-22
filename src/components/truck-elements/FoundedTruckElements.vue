<template>
	<b-container class="h-100" fluid>
		<b-row class="search-results">
			<!-- Internal -->
			<b-col class="search-results__column">
				<base-checkbox-group label="Internal" :options="internalElements"></base-checkbox-group>
			</b-col>

			<!-- External -->
			<b-col class="search-results__column">
				<base-checkbox-group
					label="External"
					:options="externalElements"
					external
				></base-checkbox-group>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import { mapState } from 'vuex';

import BaseCheckboxGroup from '@/components/base/BaseCheckboxGroup.vue';

export default {
	name: 'SearchResults',
	components: { BaseCheckboxGroup },
	computed: {
		...mapState(['externalElements', 'internalElements']),
	},
};
</script>

<style lang="scss" scoped>
.search-results {
	height: 100%;
}

.search-results__column {
	padding: 2rem 2.5rem;
}

.search-results__column:first-of-type {
	border-right: 1px solid var(--secondary);
}

@media (max-width: 576px) {
	.search-results {
		flex-direction: column;
	}

	.search-results__column {
		flex-grow: 0;
		padding: 1rem 1.5rem;
	}

	.search-results__column:first-of-type {
		border-right: 0;
		border-bottom: 1px solid var(--secondary);
	}
}
</style>
