const mutations = {
	addTruckElemToSelected({ selectedElements }, { elem = {}, isExternal = false } = {}) {
		if (isExternal) {
			selectedElements.externalElements.push(elem);
		} else {
			selectedElements.internalElements.push(elem);
		}
	},

	clearAllSelections({ selectedElements }) {
		selectedElements.externalElements = [];
		selectedElements.internalElements = [];
	},

	removeTruckElemFromSelected({ selectedElements }, { elem = {}, isExternal = false } = {}) {
		const truckElements = isExternal
			? selectedElements.externalElements
			: selectedElements.internalElements;

		const targetElemIdx = truckElements.findIndex(({ name }) => name === elem.name);

		if (targetElemIdx !== -1) {
			truckElements.splice(targetElemIdx, 1);
		}
	},

	fillCombinations(state, combinations = []) {
		state.combinations = combinations;
	},

	fillExternalElements(state, externalElements = []) {
		state.externalElements = externalElements;
	},

	fillInternalElements(state, internalElements = []) {
		state.internalElements = internalElements;
	},

	updateCombinationsPageState(state, isCombinationsPage = false) {
		state.isCombinationsPage = isCombinationsPage;
	},

	updateSearchQuery(state, searchQuery = '') {
		state.searchQuery = searchQuery;
	},
};

export default mutations;
