const importRules = require("./configs/eslint/importRules.cjs");
const baseReactRules = require("./configs/eslint/baseReactRules.cjs");

module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "airbnb",
    "plugin:import/typescript",
    "plugin:storybook/recommended",
    "prettier",
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.js"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "react-hooks",
    "@typescript-eslint",
    "import",
    "unused-imports",
    "eslint-plugin-prettier",
  ],
  rules: {
    ...importRules,
    ...baseReactRules,
    "no-console": "warn",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "max-len": 'off',
    "no-shadow": "off",
    "jsx-a11y/click-events-have-key-events": "off", //todo: fix this later
    "jsx-a11y/no-static-element-interactions": "off",//todo: fix this later
  },
};
