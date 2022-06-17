import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        counter: 0,
    }),

    actions: {
        incrementBy(value: number) {
            this.counter += value;
        },
    },

    getters: {
        doubleCount: (state) => state.counter * 2,
        // the return type **must** be explicitly set for correct type
        doublePlusOne(): number {
            return this.doubleCount + 1;
        },
    },
});
