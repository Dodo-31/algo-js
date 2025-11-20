// eslint.config.js
module.exports = [
  {
    files: ["**/*.js"],

    languageOptions: {
      ecmaVersion: 2020,   // compatible Node
      sourceType: "script" // important pour require()
    },

    rules: {
      "no-var": "error",         // interdit var
      "no-redeclare": "error",   // interdit redéclaration
      "no-undef": "error",       // signale variables non déclarées
      "semi": ["error", "always"],   // point-virgule obligatoire
      "quotes": ["error", "single"]  // guillemets simples
    }
  }
];
