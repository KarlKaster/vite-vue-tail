module.exports = {
    env: {
        browser: true,
        es2021: true,
        'vue/setup-compiler-macros': true,
    },
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:tailwindcss/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'linebreak-style': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'vue/multi-word-component-names': 0,
        'vue/no-multiple-template-root': 0,
        '@typescript-eslint/no-non-null-assertion': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'no-use-before-define': 'off',
    },
};
