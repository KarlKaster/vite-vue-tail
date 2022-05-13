module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'linebreak-style': 0,
    'no-param-reassign': 'warn',
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-multiple-template-root': 0,
  },
};
