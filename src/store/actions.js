import { HTTP } from '@/configs/http';

const actions = {
    async readInternalTruckElems({ commit }, searchQuery = '') {
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

    async readExternalTruckElems({ commit }, searchQuery = '') {
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

    readPossibleCombinations() {

    }
};

export default actions;
