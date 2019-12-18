const getters = {
    selectedTruckElems({ selectedElems }) {
        return function getElements(isExternal = false) {
            console.log(selectedElems.externalElements.length, 
                selectedElems.internalElements.length);
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
