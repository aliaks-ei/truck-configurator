const getters = {
    selectedTruckElems({ selectedElems }) {
        return function getElements(isExternal = false) {
            return isExternal 
                ? selectedElems.externalElements
                : selectedElems.internalElements;
        };
    },

    selectedTruckElemsLength({ selectedElems }) {
        const { externalElements, internalElements } = selectedElems;

        return externalElements.length + internalElements.length;
    }
};

export default getters;
