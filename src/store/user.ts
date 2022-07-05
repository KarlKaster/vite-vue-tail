import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        user: [] as any[],
    }),
});
