<template>
	<footer class="bottom-bar" :class="{ 'bottom-bar--shown': selectedTruckElementsLength }">
		<!-- Selections -->
		<selections-block></selections-block>

		<!-- Back button -->
		<base-btn
			v-if="isCombinationsPage"
			variant="dark"
			@click.native="updateCombinationsPageState(false)"
		>
			Back
		</base-btn>

		<!-- View combinations button -->
		<base-btn :disabled="isViewCombinationsBtnDisabled" v-b-modal.confirm-modal v-else>
			<span> View combinations </span>

			<i class="material-icons ml-2"> arrow_forward </i>
		</base-btn>

		<!-- Confirmation dialog -->
		<b-modal id="confirm-modal" title="Confirm action" @ok="readCombinations">
			<p class="my-2">Are you sure you want to go to the <strong> 'Combinations' </strong> page?</p>
		</b-modal>
	</footer>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex';

import helpers from '@/utils/helpers';

import BaseBtn from '@/components/base/BaseBtn.vue';
import SelectionsBlock from '@/components/bottom-bar/SelectionsBlock.vue';

export default {
	name: 'BottomBar',
	components: {
		BaseBtn,
		SelectionsBlock,
	},
	computed: {
		...mapGetters(['selectedTruckElementsLength']),
		...mapState(['isCombinationsPage', 'selectedElements']),

		isViewCombinationsBtnDisabled() {
			const { internalElements, externalElements } = this.selectedElements;

			return !(internalElements.length && externalElements.length);
		},
	},
	methods: {
		...mapActions(['readPossibleCombinations']),
		...mapMutations(['updateCombinationsPageState']),

		async readCombinations() {
			try {
				await this.readPossibleCombinations();
			} catch {
				helpers.showErrorToast.call(this);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.bottom-bar {
	--bottombar-height: 11rem;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	padding: 1rem 2.5rem;
	height: var(--bottombar-height);
	background-color: #ffffff;
	transform: translateY(var(--bottombar-height));
	transition-property: transform, box-shadow;
	transition-duration: 700ms;
	transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
	will-change: transform;

	@media (max-width: 992px) {
		padding: 1rem 2rem;
	}

	@media (max-width: 768px) {
		padding: 0.5rem 1.25rem;
	}
}

.bottom-bar--shown {
	transform: translateY(0);
	box-shadow: 0px -3px 5px -1px rgba(0, 0, 0, 0.1), 0px -5px 8px 0px rgba(0, 0, 0, 0.1),
		0px -1px 18px 0px rgba(0, 0, 0, 0.12);
}
</style>
