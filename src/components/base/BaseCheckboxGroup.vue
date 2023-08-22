<template>
	<b-form-group class="checkbox-group-wrapper" :label="label">
		<b-form-checkbox
			class="base-checkbox"
			v-for="option in options"
			:checked="selectedTruckElements(external)"
			:key="option.name"
			:value="option"
			@change="selectTruckElem(Boolean($event), option)"
		>
			{{ capitalizeFirstLetter(option.name) }}
		</b-form-checkbox>
	</b-form-group>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import helpers from '@/utils/helpers';

export default {
	name: 'BaseCheckboxGroup',
	props: {
		external: {
			type: Boolean,
			required: false,
			default: false,
		},
		label: {
			type: String,
			required: false,
			default: '',
		},
		options: {
			type: Array,
			required: false,
			default() {
				return [];
			},
		},
	},
	computed: {
		...mapGetters(['selectedTruckElements']),
	},
	methods: {
		...mapMutations(['addTruckElemToSelected', 'removeTruckElemFromSelected']),

		capitalizeFirstLetter: helpers.capitalizeFirstLetter,

		selectTruckElem(isSelected, elem) {
			const params = { elem, isExternal: this.external };

			if (isSelected) {
				this.addTruckElemToSelected(params);
			} else {
				this.removeTruckElemFromSelected(params);
			}
		},
	},
};
</script>

<style lang="scss">
.checkbox-group-wrapper.form-group {
	margin-bottom: 0;

	& > :first-child {
		font-size: 1.75rem;
		font-weight: 300;
		margin-bottom: 0.5rem;
	}

	& > * {
		outline: none;
	}
}

.base-checkbox.custom-control {
	line-height: 2;
	padding-left: 2.25rem;

	&:not(:last-of-type) {
		margin-bottom: 0.5rem;
	}

	.custom-control-label {
		cursor: pointer;

		&:before {
			background-color: #d2e4f4;
		}

		&:before,
		&:after {
			width: 1.5rem;
			height: 1.5rem;
			margin-left: -0.75rem;
		}
	}
}

@media (max-width: 576px) {
	.checkbox-group-wrapper.form-group > :first-child {
		font-size: 1.25rem;
		margin-bottom: 0.25rem;
	}

	.base-checkbox.custom-control {
		line-height: 1.5;
		padding-left: 1.5rem;

		&:not(:last-of-type) {
			margin-bottom: 0;
		}

		.custom-control-label {
			font-size: 12px;

			&:before,
			&:after {
				width: 1rem;
				height: 1rem;
				margin-left: 0;
				margin-top: -0.25rem;
			}
		}
	}
}
</style>
