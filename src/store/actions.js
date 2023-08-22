import { HTTP } from '@/configs/http';

const actions = {
	async readInternalTruckElements({ commit, state }) {
		const { searchQuery } = state;

		if (!(searchQuery && searchQuery.length)) {
			commit('fillInternalElements');

			return;
		}

		try {
			const { data } = await HTTP.get(`internal/${ searchQuery }`);

			commit('fillInternalElements', data);

			return data;
		} catch (errors) {
			throw errors;
		}
	},

	async readExternalTruckElements({ commit, state }) {
		const { searchQuery } = state;

		if (!(searchQuery && searchQuery.length)) {
			commit('fillExternalElements');

			return;
		}

		try {
			const { data } = await HTTP.get(`external/${ searchQuery }`);

			commit('fillExternalElements', data);

			return data;
		} catch (errors) {
			throw errors;
		}
	},

	async readPossibleCombinations({ commit, state }) {
		try {
			const { data } = await HTTP.post('possible-combinations', state.selectedElements);

			commit('fillCombinations', data);
			commit('updateSearchQuery');
			commit('updateCombinationsPageState', true);

			return data;
		} catch (errors) {
			throw errors;
		}
	},
};

export default actions;
