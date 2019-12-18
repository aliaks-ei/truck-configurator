const mutations = {
    addTruckElemToSelected({ selectedElems }, { elem = {}, isExternal = false } = {}) {
        if (isExternal) {
            selectedElems.externalElements.push(elem);
        }
        else {
            selectedElems.internalElements.push(elem);
        }
    },

    clearAllSelections({ selectedElems }) {
        selectedElems.externalElements = [];
        selectedElems.internalElements = [];
    },

    removeTruckElemFromSelected({ selectedElems }, { elem = {}, isExternal = false } = {}) {
        const truckElems = isExternal 
            ? selectedElems.externalElements 
            : selectedElems.internalElements;

        const targetElemIdx = truckElems.findIndex(
            truckElem => truckElem.name === elem.name
        );

        if (targetElemIdx !== -1) {
            truckElems.splice(targetElemIdx, 1);
        }
    },

    fillCombinations(state, combinations = []) {
        state.combinations = combinations;
    },

    fillExternalElems(state, externalElems = []) {
        state.externalElems = externalElems;
    },

    fillInternalElems(state, internalElems = []) {
        state.internalElems = internalElems;
    },

    updateCombinationsPageState(state, isActive = false) {
        state.isCombinationsPage = isActive;
    },

    updateSearchQuery(state, newValue = '') {
        state.searchQuery = newValue;
    }
};

export default mutations;
