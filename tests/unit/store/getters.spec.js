import getters from '@/store//getters';

/** Test cases on "selectedTruckElems" getter */
describe('Getters: "selectedTruckElems" getter', () => {
    const selectedElems = {
        internalElements : [{ name: 'long-range cabin' }],
        externalElements : [{ name: 'postal purpose' }]
    };

    it('returns external truck elements', () => {
        const isExternal = true;
        const result = getters.selectedTruckElems({ selectedElems })(isExternal);

        expect(result).toEqual(selectedElems.externalElements);
    });

    it('returns internal truck elements', () => {
        const isExternal = false;
        const result = getters.selectedTruckElems({ selectedElems })(isExternal);

        expect(result).toEqual(selectedElems.internalElements);
    });

    it('returns internal truck elements if no option passed', () => {
        const result = getters.selectedTruckElems({ selectedElems })();

        expect(result).toEqual(selectedElems.internalElements);
    });
});

/** Test cases on "selectedTruckElemsLength" getter  */
describe('Getters: "selectedTruckElemsLength" getter', () => {
    const selectedElems = {
        internalElements : [{ name: 'long-range cabin' }, { name: 'mid-range cabin'}],
        externalElements : [{ name: 'postal purpose' }]
    };

    it('returns total length of both truck element types', () => {
        const length = getters.selectedTruckElemsLength({ selectedElems });

        expect(length).toBe(3);
    });

    it('returns total length if no external elements', () => {
        selectedElems.externalElements.length = 0;

        const length = getters.selectedTruckElemsLength({ selectedElems });

        expect(length).toBe(2);
    });

    it('returns total length if no both element types', () => {
        selectedElems.internalElements.length = 0;

        const length = getters.selectedTruckElemsLength({ selectedElems });

        expect(length).toBe(0);
    });
});
