import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        counter: 0,
    }),
    getters: {
        doubleCount: (state): number => state.counter * 2,
    },
    actions: {
        increment(): void {
            this.counter++;
        },
    },
});
