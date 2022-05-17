/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
    state: {
        theme: {},
    },
    mutations: {
        SET_THEME(state: any, theme: any) {
            // eslint-disable-next-line no-param-reassign
            state.theme = theme;
            localStorage.theme = theme;
        },
    },
    actions: {
        initTheme({ commit }: any) {
            const cachedTheme = localStorage.theme ? localStorage.theme : false;

            //  `true` if the user has set theme to `dark` on browser/OS
            const userPrefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches;
            console.log('initTheme ~ userPrefersDark', userPrefersDark);

            if (cachedTheme) {
                document.querySelector('html')?.classList.add(cachedTheme);
            } else if (userPrefersDark) {
                commit('SET_THEME', 'dark');
            } else {
                commit('SET_THEME', 'light');
            }
        },
        toggleTheme({ commit }: any) {
            switch (localStorage.theme) {
                case 'light':
                    commit('SET_THEME', 'dark');
                    break;

                default:
                    commit('SET_THEME', 'light');
                    break;
            }
        },
    },
    getters: {
        getTheme: (state: any) => state.theme,
    },
};
