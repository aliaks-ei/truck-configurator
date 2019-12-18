const getters = {
    selectedTruckElems({ selectedElems }) {
        return function getElements(isExternal = false) {
            return isExternal 
                ? selectedElems.externalElements
                : selectedElems.internalElements;
        };
    }
};

export default getters;
