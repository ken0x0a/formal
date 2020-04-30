module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "@ken0x0a/eslint-config/base",
    "@ken0x0a/eslint-config/tslint-rules",
    "@ken0x0a/eslint-config/import",
    "@ken0x0a/eslint-config/jest",
    "@ken0x0a/eslint-config/typescript",
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    // TypeScript.
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-use-before-define": "off",

    // React/JSX
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/prop-types": "off",
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
  },
};
