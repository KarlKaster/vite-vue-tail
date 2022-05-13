import { createStore } from 'vuex';

export interface State {
    count: number;
}

export default createStore<State>({
    modules: {},
    state() {
        return {
            count: 0,
        };
    },
    mutations: {
        increment(state) {
            state.count++;
        },
    },
    getters: {},
    actions: {},
});
