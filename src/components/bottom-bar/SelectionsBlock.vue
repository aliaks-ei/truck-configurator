<template>
	<div class="selections-block">
		<h3 class="selections-block__title"> Your selection </h3>

		<!-- Selections (internal and external) -->
		<div class="selections-block__items">
			<selection
				v-for         = "truckElem in selectedElems.internalElements"
				:key          = "truckElem.name"
				:title        = "capitalizeFirstLetter(truckElem.name)"
				@closeClicked = "handleCloseIconClick({ elem: truckElem, isExternal: false })"
			></selection>

			<selection
				v-for         = "truckElem in selectedElems.externalElements"
				:key          = "truckElem.name"
				:title        = "capitalizeFirstLetter(truckElem.name)"
				@closeClicked = "handleCloseIconClick({ elem: truckElem, isExternal: true })"
				external
			></selection>
		</div>

		<!-- Unselect all btn -->
		<span
			class  = "selections-block__unselect-btn"
			v-if   = "selectedTruckElemsLength && !isCombinationsPage"
			@click = "unselectAll"
		>
			Unselect all
		</span>
	</div>
</template>

<script>
	import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

	import helpers from '@/utils/helpers';

	import Selection from './SelectionsBlockSelection.vue';

	export default {
		name       : 'SelectionsBlock',
		components : { Selection },
		computed   : {
			...mapGetters([ 'selectedTruckElemsLength' ]),
			...mapState([ 'isCombinationsPage', 'selectedElems' ])
		},
		methods: {
			...mapActions([ 'readPossibleCombinations' ]),
			...mapMutations([
				'clearAllSelections',
				'removeTruckElemFromSelected',
				'updateCombinationsPageState',
				'updateSearchQuery'
			]),

			capitalizeFirstLetter: helpers.capitalizeFirstLetter,

			handleCloseIconClick({ elem, isExternal }) {
				this.removeTruckElemFromSelected({ elem, isExternal });

				!this.selectedTruckElemsLength  && this.updateCombinationsPageState();
				this.isCombinationsPage && this.readPossibleCombinations();
			},

			unselectAll() {
				this.updateSearchQuery();
				this.clearAllSelections();
			}
		}
	};
</script>

<style lang="scss" scoped>

	.selections-block {
		display        : flex;
		flex           : 0 1 75%;
		flex-direction : column;
		margin-top     : .5rem;
	}

	.selections-block__title {
		font-size   : 1.75rem;
		font-weight : 300;
	}

	.selections-block__items {
		line-height: 1.25;
	}

	.selections-block__unselect-btn {
		font-style      : italic;
		font-weight     : 600;
		align-self      : flex-start;
		color           : var(--danger);
		text-decoration : underline;
		cursor          : pointer;
		margin-top      : auto;
	}

	@media (max-width: 992px) {
		.selections-block__title {
			font-size     : 1.5rem;
			margin-bottom : .25rem;
		}
	}

	@media (max-width: 768px) {
		.selections-block {
			flex: 0 1 auto;
		}

		.selections-block__title {
			font-size: 1.25rem;
		}

		.selections-block__items {
			line-height: 1;
		}

		.selections-block__unselect-btn {
			position  : absolute;
			right     : 1.25rem;
			font-size : 14px;
		}
	}

</style>
