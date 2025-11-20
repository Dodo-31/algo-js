import eslintRecommended from 'eslint/conf/eslint-recommended.js';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    // fichiers ciblés
    files: ['*.js'],

    // options du langage
    languageOptions: {
      ecmaVersion: 12, // ES2021
      sourceType: 'module', // modules ES6
    },

    // plugins (pas besoin pour l'instant)
    plugins: {},

    // règles personnalisées
    rules: {
      'no-var': 'error', // interdit var
      semi: ['error', 'always'], // point-virgule obligatoire
      'no-redeclare': 'error', // interdit redéclaration
      quotes: ['error', 'single'], // guillemets simples
    },

    // inclure les règles recommandées et désactiver les conflits avec Prettier
    ...eslintRecommended,
    ...prettierConfig,
  },
];
