/* eslint-disable */
import mutations from "@/store/mutations";

/** Test cases on "addTruckElemToSelected" mutation */
describe('Mutations: "addTruckElemToSelected" mutation', () => {
	const state = {};
	const { addTruckElemToSelected } = mutations;

	beforeEach(() => {
		state.selectedElements = {
			internalElements: [{ name: "long-range cabin" }],
			externalElements: [{ name: "postal purpose" }]
		};
	});

	it("adds internal truck element to selected", () => {
		const elem = { name: "mid-range cabin" };
		const isExternal = false;

		addTruckElemToSelected(state, { elem, isExternal });

		expect(state.selectedElements.internalElements.length).toBe(2);
		expect(state.selectedElements.externalElements.length).toBe(1);
	});

	it("adds external truck element to selected", () => {
		const elem = { name: "logistics purpose" };
		const isExternal = true;

		addTruckElemToSelected(state, { elem, isExternal });

		expect(state.selectedElements.internalElements.length).toBe(1);
		expect(state.selectedElements.externalElements.length).toBe(2);
	});

	it('adds external truck element to selected if no "isExternal" option passed', () => {
		const elem = { name: "construction purpose" };

		addTruckElemToSelected(state, { elem });

		expect(state.selectedElements.internalElements.length).toBe(2);
		expect(state.selectedElements.externalElements.length).toBe(1);
	});
});

/** Test cases on "clearAllSelections" mutation */
describe('Mutations: "clearAllSelections" mutation', () => {
	const state = {
		selectedElements: {
			internalElements: [{ name: "long-range cabin" }],
			externalElements: [{ name: "postal purpose" }]
		}
	};

	const { clearAllSelections } = mutations;

	it("clears all selected elements", () => {
		clearAllSelections(state);

		expect(state.selectedElements.internalElements).toEqual([]);
		expect(state.selectedElements.externalElements).toEqual([]);
	});

	it("clears all selected elements even if they were empty", () => {
		clearAllSelections(state);

		expect(state.selectedElements.internalElements).toEqual([]);
		expect(state.selectedElements.externalElements).toEqual([]);
	});
});

/** Test cases on "removeTruckElemFromSelected" mutation */
describe('Mutations: "removeTruckElemFromSelected" mutation', () => {
	const state = {};
	const { removeTruckElemFromSelected } = mutations;

	beforeEach(() => {
		state.selectedElements = {
			internalElements: [{ name: "long-range cabin" }, { name: "mid-range cabin" }],
			externalElements: [{ name: "postal purpose" }, { name: "construction purpose" }]
		};
	});

	it("removes internal truck elem from selected", () => {
		const elem = { name: "long-range cabin" };
		const isExternal = false;

		removeTruckElemFromSelected(state, { elem, isExternal });

		expect(state.selectedElements.externalElements.length).toBe(2);
		expect(state.selectedElements.internalElements.length).toBe(1);
		expect(state.selectedElements.internalElements[0].name).toBe("mid-range cabin");
	});

	it("removes external truck elem from selected", () => {
		const elem = { name: "construction purpose" };
		const isExternal = true;

		removeTruckElemFromSelected(state, { elem, isExternal });

		expect(state.selectedElements.internalElements.length).toBe(2);
		expect(state.selectedElements.externalElements.length).toBe(1);
		expect(state.selectedElements.externalElements[0].name).toBe("postal purpose");
	});

	it("does nothing with internal elements if passed element not found", () => {
		const elem = { name: "superlong-range cabin" };
		const isExternal = false;

		removeTruckElemFromSelected(state, { elem, isExternal });

		expect(state.selectedElements.externalElements.length).toBe(2);
		expect(state.selectedElements.internalElements.length).toBe(2);
		expect(state.selectedElements.internalElements[0].name).toBe("long-range cabin");
		expect(state.selectedElements.internalElements[1].name).toBe("mid-range cabin");
	});

	it("does nothing with external elements if passed element not found", () => {
		const elem = { name: "fake purpose" };
		const isExternal = true;

		removeTruckElemFromSelected(state, { elem, isExternal });

		expect(state.selectedElements.externalElements.length).toBe(2);
		expect(state.selectedElements.internalElements.length).toBe(2);
		expect(state.selectedElements.externalElements[0].name).toBe("postal purpose");
		expect(state.selectedElements.externalElements[1].name).toBe("construction purpose");
	});

	it('removes internal truck elem from selected if no "isExternal" option passed', () => {
		const elem = { name: "long-range cabin" };

		removeTruckElemFromSelected(state, { elem });

		expect(state.selectedElements.externalElements.length).toBe(2);
		expect(state.selectedElements.internalElements.length).toBe(1);
		expect(state.selectedElements.internalElements[0].name).toBe("mid-range cabin");
	});

	it("does nothing with elements if no parameters passed", () => {
		removeTruckElemFromSelected(state);

		expect(state.selectedElements.externalElements.length).toBe(2);
		expect(state.selectedElements.internalElements.length).toBe(2);
	});
});

/** Test cases on "fillCombinations" mutation */
describe('Mutations: "fillCombinations" mutation', () => {
	const state = {
		combinations: []
	};

	const { fillCombinations } = mutations;

	it("fills combinations with passed value", () => {
		const combinations = [{ internal: "short-range cabin", external: "postal purpose" }];

		fillCombinations(state, combinations);

		expect(state.combinations).toEqual(combinations);
	});

	it("rewrites combinations if empty array passed", () => {
		const combinations = [];

		fillCombinations(state, combinations);

		expect(state.combinations).toEqual([]);
	});

	it("fills combinations with empty array if no value", () => {
		state.combinations = [{ internal: "short-range cabin", external: "postal purpose" }];

		fillCombinations(state);

		expect(state.combinations).toEqual([]);
	});
});

/** Test cases on "fillExternalElements" mutation */
describe('Mutations: "fillExternalElements" mutation', () => {
	const state = {
		externalElements: []
	};

	const { fillExternalElements } = mutations;

	it("fills external elements with passed value", () => {
		const externalElements = [{ name: "construction purpose" }, { name: "postal purpose" }];

		fillExternalElements(state, externalElements);

		expect(state.externalElements).toEqual(externalElements);
	});

	it("rewrites external elements if empty array passed", () => {
		const externalElements = [];

		fillExternalElements(state, externalElements);

		expect(state.externalElements).toEqual([]);
	});

	it("fills external elements with empty array if no value", () => {
		state.externalElements = [{ name: "construction purpose" }];

		fillExternalElements(state);

		expect(state.externalElements).toEqual([]);
	});
});

/** Test cases on "fillInternalElements" mutation */
describe('Mutations: "fillInternalElements" mutation', () => {
	const state = {
		internalElements: []
	};

	const { fillInternalElements } = mutations;

	it("fills external elements with passed value", () => {
		const internalElements = [{ name: "long-range cabin" }, { name: "short-range cabin" }];

		fillInternalElements(state, internalElements);

		expect(state.internalElements).toEqual(internalElements);
	});

	it("rewrites external elements if empty array passed", () => {
		const internalElements = [];

		fillInternalElements(state, internalElements);

		expect(state.internalElements).toEqual([]);
	});

	it("fills external elements with empty array if no value", () => {
		state.internalElements = [{ name: "long-range cabin" }];

		fillInternalElements(state);

		expect(state.internalElements).toEqual([]);
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
	const state = { searchQuery: "" };

	const { updateSearchQuery } = mutations;

	it('sets "searchQuery" value (search by internal elements)', () => {
		const searchQuery = "long-range";

		updateSearchQuery(state, searchQuery);

		expect(state.searchQuery).toEqual(searchQuery);
	});

	it('sets "searchQuery" value (search by external elements)', () => {
		const searchQuery = " purpose";

		updateSearchQuery(state, searchQuery);

		expect(state.searchQuery).toEqual(searchQuery);
	});

	it('sets "searchQuery" to empty string if no value passed', () => {
		updateSearchQuery(state);

		expect(state.searchQuery).toBe("");
	});
});
