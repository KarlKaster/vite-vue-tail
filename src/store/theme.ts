import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: 'light',
    }),

    actions: {
        SET_THEME(theme: string) {
            // eslint-disable-next-line no-param-reassign
            this.$state.theme = theme;
            localStorage.theme = theme;
        },
        initTheme() {
            const cachedTheme = localStorage.theme ? localStorage.theme : false;

            //  `true` if the user has set theme to `dark` on browser/OS
            const userPrefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches;

            if (cachedTheme) {
                document.querySelector('html')?.classList.add(cachedTheme);
            } else if (userPrefersDark) {
                this.SET_THEME('dark');
            } else {
                this.SET_THEME('light');
            }
        },
        toggleTheme() {
            switch (localStorage.theme) {
                case 'light':
                    this.SET_THEME('dark');
                    break;

                default:
                    this.SET_THEME('light');
                    break;
            }
        },
    },

    getters: {
        getTheme: (state) => state.theme,
    },
});
