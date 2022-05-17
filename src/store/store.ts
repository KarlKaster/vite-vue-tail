import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import theme from './modules/theme';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
});
export interface State {
    count: number;
}

const store = new Vuex.Store<State>({
    modules: {
        theme,
    },
    state() {
        return {
            count: 0,
        };
    },
    mutations: {
        increment(state) {
            // eslint-disable-next-line no-param-reassign
            state.count += 1;
        },
    },
    getters: {},
    actions: {},
    plugins: [vuexLocal.plugin],
});

export default store;
