const eslintRecommended = require('eslint/conf/eslint-recommended.js');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  {
    files: ['*.js'],
    languageOptions: { ecmaVersion: 12, sourceType: 'module' },
    plugins: {},
    rules: {
      'no-var': 'error',
      semi: ['error', 'always'],
      'no-redeclare': 'error',
      quotes: ['error', 'single'],
    },
    ...eslintRecommended,
    ...prettierConfig,
  },
];
