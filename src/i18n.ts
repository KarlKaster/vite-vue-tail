import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ja from './locales/ja.json';

// 2. Create i18n instance with options
const i18n = createI18n({
    legacy: false,
    locale: 'ja', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages: {
        en,
        ja,
    }, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
});

export default i18n;
