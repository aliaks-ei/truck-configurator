import { HTTP } from '@/configs/http';

const actions = {
    async readInternalTruckElems({ commit, state }) {
        const { searchQuery } = state;

        if (!(searchQuery && searchQuery.length)) {
            commit('fillInternalElems');

            return;
        }
        try {
            const { data } = await HTTP.get(`internal/${ searchQuery }`);
            
            commit('fillInternalElems', data);

            return data;
        }
        catch (errors) {
            throw errors;
        }
    },

    async readExternalTruckElems({ commit, state }) {
        const { searchQuery } = state;

        if (!(searchQuery && searchQuery.length)) {
            commit('fillExternalElems');

            return;
        }

        try {
            const { data } = await HTTP.get(`external/${ searchQuery }`);

            commit('fillExternalElems', data);

            return data;
        }
        catch (errors) {
            throw errors;
        }
    },

    async readPossibleCombinations({ commit, state }) {
        commit('fillCombinations');

        try {
            const { data } = await HTTP.post('possible-combinations', state.selectedElems);

            commit('fillCombinations', data);

            return data;
        }
        catch (errors) {
            throw errors;
        }
    }
};

export default actions;
