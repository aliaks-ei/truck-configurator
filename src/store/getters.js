const getters = {
	selectedTruckElements({ selectedElements = {} }) {
		return function getElements(isExternal = false) {
			return isExternal ? selectedElements.externalElements : selectedElements.internalElements;
		};
	},

	selectedTruckElementsLength({ selectedElements = {} }) {
		const { externalElements, internalElements } = selectedElements;

		return externalElements.length + internalElements.length;
	},
};

export default getters;
