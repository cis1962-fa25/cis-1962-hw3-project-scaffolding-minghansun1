// eslint.ts
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "prefer-const": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "comma-dangle": ["error", "only-multiline"],
    }
  }
]);