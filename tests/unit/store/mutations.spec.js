import mutations from '@/store/mutations';

/** Test cases on "addTruckElemToSelected" mutation */
describe('Mutations: "addTruckElemToSelected" mutation', () => {
    const state = {};
    const { addTruckElemToSelected } = mutations;

    beforeEach(() => {
        state.selectedElems = {
            internalElements : [{ name: 'long-range cabin' }],
            externalElements : [{ name: 'postal purpose' }]
        };
    });

    it('adds internal truck element to selected', () => {
        const elem       = { name : 'mid-range cabin' };
        const isExternal = false;

        addTruckElemToSelected(state, { elem, isExternal });

        expect(state.selectedElems.internalElements.length).toBe(2);
        expect(state.selectedElems.externalElements.length).toBe(1);
    });

    it('adds external truck element to selected', () => {
        const elem       = { name : 'logistics purpose' };
        const isExternal = true;

        addTruckElemToSelected(state, { elem, isExternal });

        expect(state.selectedElems.internalElements.length).toBe(1);
        expect(state.selectedElems.externalElements.length).toBe(2);
    });

    it('adds external truck element to selected if no "isExternal" option passed', () => {
        const elem = { name : 'construction purpose' };

        addTruckElemToSelected(state, { elem });

        expect(state.selectedElems.internalElements.length).toBe(2);
        expect(state.selectedElems.externalElements.length).toBe(1);
    });
});

/** Test cases on "clearAllSelections" mutation */
describe('Mutations: "clearAllSelections" mutation', () => {
    const state = {
        selectedElems: {
            internalElements : [{ name: 'long-range cabin' }],
            externalElements : [{ name: 'postal purpose' }]
        }
    };

    const { clearAllSelections } = mutations;

    it('clears all selected elements', () => {
        clearAllSelections(state);

        expect(state.selectedElems.internalElements).toEqual([]);
        expect(state.selectedElems.externalElements).toEqual([]);
    });

    it('clears all selected elements even if they were empty', () => {
        clearAllSelections(state);

        expect(state.selectedElems.internalElements).toEqual([]);
        expect(state.selectedElems.externalElements).toEqual([]);
    });
});

/** Test cases on "removeTruckElemFromSelected" mutation */
describe('Mutations: "removeTruckElemFromSelected" mutation', () => {
    const state = {};
    const { removeTruckElemFromSelected } = mutations;

    beforeEach(() => {
        state.selectedElems = {
            internalElements : [{ name: 'long-range cabin' }, { name: 'mid-range cabin' }],
            externalElements : [{ name: 'postal purpose' }, { name: 'construction purpose' }]
        };
    });

    it('removes internal truck elem from selected', () => {
        const elem       = { name: 'long-range cabin' };
        const isExternal = false;

        removeTruckElemFromSelected(state, { elem, isExternal });

        expect(state.selectedElems.externalElements.length).toBe(2);
        expect(state.selectedElems.internalElements.length).toBe(1);
        expect(state.selectedElems.internalElements[0].name).toBe('mid-range cabin');
    });

    it('removes external truck elem from selected', () => {
        const elem       = { name: 'construction purpose' };
        const isExternal = true;

        removeTruckElemFromSelected(state, { elem, isExternal });

        expect(state.selectedElems.internalElements.length).toBe(2);
        expect(state.selectedElems.externalElements.length).toBe(1);
        expect(state.selectedElems.externalElements[0].name).toBe('postal purpose');
    });

    it('does nothing with internal elements if passed element not found', () => {
        const elem       = { name: 'superlong-range cabin' };
        const isExternal = false;

        removeTruckElemFromSelected(state, { elem, isExternal });

        expect(state.selectedElems.externalElements.length).toBe(2);
        expect(state.selectedElems.internalElements.length).toBe(2);
        expect(state.selectedElems.internalElements[0].name).toBe('long-range cabin');
        expect(state.selectedElems.internalElements[1].name).toBe('mid-range cabin');
    });

    it('does nothing with external elements if passed element not found', () => {
        const elem       = { name: 'fake purpose' };
        const isExternal = true;

        removeTruckElemFromSelected(state, { elem, isExternal });

        expect(state.selectedElems.externalElements.length).toBe(2);
        expect(state.selectedElems.internalElements.length).toBe(2);
        expect(state.selectedElems.externalElements[0].name).toBe('postal purpose');
        expect(state.selectedElems.externalElements[1].name).toBe('construction purpose');
    });

    it('removes internal truck elem from selected if no "isExternal" option passed', () => {
        const elem = { name: 'long-range cabin' };

        removeTruckElemFromSelected(state, { elem });

        expect(state.selectedElems.externalElements.length).toBe(2);
        expect(state.selectedElems.internalElements.length).toBe(1);
        expect(state.selectedElems.internalElements[0].name).toBe('mid-range cabin');
    });

    it('does nothing with elements if no parameters passed', () => {
        removeTruckElemFromSelected(state);

        expect(state.selectedElems.externalElements.length).toBe(2);
        expect(state.selectedElems.internalElements.length).toBe(2);
    });
});

/** Test cases on "fillCombinations" mutation */
describe('Mutations: "fillCombinations" mutation', () => {
    const state = {
        combinations: []
    };

    const { fillCombinations } = mutations;

    it('fills combinations with passed value', () => {
        const combinations = [{ internal: 'short-range cabin', external: 'postal purpose' }];

        fillCombinations(state, combinations);
        
        expect(state.combinations).toEqual(combinations);
    });

    it('rewrites combinations if empty array passed', () => {
        const combinations = [];

        fillCombinations(state, combinations);
        
        expect(state.combinations).toEqual([]);
    });

    it('fills combinations with empty array if no value', () => {
        state.combinations = [{ internal: 'short-range cabin', external: 'postal purpose' }];

        fillCombinations(state);
        
        expect(state.combinations).toEqual([]);
    });
});

/** Test cases on "fillExternalElems" mutation */
describe('Mutations: "fillExternalElems" mutation', () => {
    const state = {
        externalElems: []
    };

    const { fillExternalElems } = mutations;

    it('fills external elements with passed value', () => {
        const externalElems = [{ name: 'construction purpose' }, { name: 'postal purpose' }];

        fillExternalElems(state, externalElems);
        
        expect(state.externalElems).toEqual(externalElems);
    });

    it('rewrites external elements if empty array passed', () => {
        const externalElems = [];

        fillExternalElems(state, externalElems);
        
        expect(state.externalElems).toEqual([]);
    });

    it('fills external elements with empty array if no value', () => {
        state.externalElems = [{ name: 'construction purpose' }];

        fillExternalElems(state);
        
        expect(state.externalElems).toEqual([]);
    });
});

/** Test cases on "fillInternalElems" mutation */
describe('Mutations: "fillInternalElems" mutation', () => {
    const state = {
        internalElems: []
    };

    const { fillInternalElems } = mutations;

    it('fills external elements with passed value', () => {
        const internalElems = [{ name: 'long-range cabin' }, { name: 'short-range cabin' }];

        fillInternalElems(state, internalElems);
        
        expect(state.internalElems).toEqual(internalElems);
    });

    it('rewrites external elements if empty array passed', () => {
        const internalElems = [];

        fillInternalElems(state, internalElems);
        
        expect(state.internalElems).toEqual([]);
    });

    it('fills external elements with empty array if no value', () => {
        state.internalElems = [{ name: 'long-range cabin' }];

        fillInternalElems(state);
        
        expect(state.internalElems).toEqual([]);
    });
});

/** Test cases on "updateCombinationsPageState" mutation */
describe('Mutations: "updateCombinationsPageState" mutation', () => {
    const state = { isCombinationsPage: false };

    const { updateCombinationsPageState } = mutations;

    it('sets "isCombinationsPage" value to true', () => {
        const isCombinationsPage = true;

        updateCombinationsPageState(state, isCombinationsPage);

        expect(state.isCombinationsPage).toBe(true);
    });

    it('sets "isCombinationsPage" value to false', () => {
        const isCombinationsPage = false;

        updateCombinationsPageState(state, isCombinationsPage);

        expect(state.isCombinationsPage).toBe(false);
    });

    it('sets "isCombinationsPage" value to false if no value passed', () => {
        state.isCombinationsPage = true;

        updateCombinationsPageState(state);

        expect(state.isCombinationsPage).toBe(false);
    });
});

/** Test cases on "updateSearchQuery" mutation */
describe('Mutations: "updateSearchQuery" mutation', () => {
    const state = { searchQuery: '' };

    const { updateSearchQuery } = mutations;

    it('sets "searchQuery" value (search by internal elems)', () => {
        const searchQuery = 'long-range';

        updateSearchQuery(state, searchQuery);

        expect(state.searchQuery).toEqual(searchQuery);
    });

    it('sets "searchQuery" value (search by external elems)', () => {
        const searchQuery = ' purpose';

        updateSearchQuery(state, searchQuery);

        expect(state.searchQuery).toEqual(searchQuery);
    });

    it('sets "searchQuery" to empty string if no value passed', () => {
        updateSearchQuery(state);

        expect(state.searchQuery).toBe('');
    });
});
