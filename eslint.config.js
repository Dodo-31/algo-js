// eslint.config.js
module.exports = [
  {
    files: ['**/*.js'],

    languageOptions: {
      ecmaVersion: 2020, // compatible Node
      sourceType: 'script', // important : pour require()
    },

    rules: {
      'no-var': 'error', // interdit var
      semi: ['error', 'always'],
      'no-redeclare': 'error',
      quotes: ['error', 'single'],
    },
  },
];
