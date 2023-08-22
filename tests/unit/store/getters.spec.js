/* eslint-disable */
import getters from "@/store//getters";

/** Test cases on "selectedTruckElements" getter */
describe('Getters: "selectedTruckElements" getter', () => {
	const selectedElements = {
		internalElements: [{ name: "long-range cabin" }],
		externalElements: [{ name: "postal purpose" }]
	};

	const callGetter = getters.selectedTruckElements({ selectedElements });

	it("returns external truck elements", () => {
		const isExternal = true;
		const result = callGetter(isExternal);

		expect(result).toEqual(selectedElements.externalElements);
	});

	it("returns internal truck elements", () => {
		const isExternal = false;
		const result = callGetter(isExternal);

		expect(result).toEqual(selectedElements.internalElements);
	});

	it("returns internal truck elements if no option passed", () => {
		const result = callGetter();

		expect(result).toEqual(selectedElements.internalElements);
	});
});

/** Test cases on "selectedTruckElementsLength" getter  */
describe('Getters: "selectedTruckElementsLength" getter', () => {
	const selectedElements = {
		internalElements: [{ name: "long-range cabin" }, { name: "mid-range cabin" }],
		externalElements: [{ name: "postal purpose" }]
	};

	const { selectedTruckElementsLength } = getters;

	it("returns total length of both truck element types", () => {
		const length = selectedTruckElementsLength({ selectedElements });

		expect(length).toBe(3);
	});

	it("returns total length if no external elements", () => {
		selectedElements.externalElements.length = 0;

		const length = selectedTruckElementsLength({ selectedElements });

		expect(length).toBe(2);
	});

	it("returns total length if no both element types", () => {
		selectedElements.internalElements.length = 0;

		const length = selectedTruckElementsLength({ selectedElements });

		expect(length).toBe(0);
	});
});
