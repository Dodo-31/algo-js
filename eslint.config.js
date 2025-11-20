// eslint.config.js
module.exports = [
  {
    files: ["**/*.js"],

    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script" // important pour require()
    },

    rules: {
      "no-var": "error",
      "no-redeclare": "error",
      "no-undef": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "single"]
    }
  }
];
