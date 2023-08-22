<template>
	<b-button class="base-btn" :disabled="disabled" :variant="variant" squared>
		<slot></slot>
	</b-button>
</template>

<script>
export default {
	name: 'BaseBtn',
	props: {
		disabled: {
			type: Boolean,
			required: false,
			default: false,
		},
		variant: {
			type: String,
			required: false,
			default: 'primary',
		},
	},
};
</script>

<style lang="scss" scoped>
.base-btn {
	display: flex;
	flex: 0 0 270px;
	align-self: center;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	padding: 1.5rem 2rem;
	text-transform: uppercase;

	@media (max-width: 992px) {
		flex: 0 0 250px;
		font-size: 14px;
		padding: 1.5rem 1.25rem;

		.material-icons {
			font-size: 1.2rem;
		}
	}

	@media (max-width: 768px) {
		position: absolute;
		bottom: 1rem;
		right: 1.25rem;
		padding: 0.5rem 1rem;
		font-size: 12px;
		width: 190px;

		.material-icons {
			font-size: 1rem;
		}
	}
}
</style>
