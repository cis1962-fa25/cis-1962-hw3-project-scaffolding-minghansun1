const { defineConfig } = require("eslint/config");
const globals = require("globals");
const tseslint = require("typescript-eslint");

module.exports = defineConfig([
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,cjs,ts,cts}"], // dropped mjs/mts, since you're CommonJS
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "script", // 👈 CommonJS mode, not module
      globals: globals.node,
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "prefer-const": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/no-var-requires": "off", // 👈 allow require()
      "@typescript-eslint/no-require-imports": "off", // 👈 allow require()
      "arrow-spacing": ["error", { before: true, after: true }],
      "comma-dangle": ["error", "only-multiline"],
    },
  },
]);