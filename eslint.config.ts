import { defineConfig } from "eslint/config";
import * as globals from "globals";
import * as tseslint from "typescript-eslint";

export default defineConfig([
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module", // ES module mode
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
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-require-imports": "on",
      "arrow-spacing": ["error", { before: true, after: true }],
      "comma-dangle": ["error", "only-multiline"],
    },
  },
]);