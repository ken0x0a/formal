module.exports = {
  "README.md": ["doctoc"],
  "docs/*.md": ["doctoc"],
  "**/*.md": ["prettier --write"],
  "*.{js,jsx,ts,tsx}": ["eslint --fix"],
  "*.json": ["prettier --write"],
  // '*.{ts,tsx}': [
  //   // https://eslint.org/docs/user-guide/command-line-interface#--ignore-pattern
  //   "eslint --fix -c .eslintrc.js --ext .ts,.tsx --ignore-pattern '**/*.d.ts' --report-unused-disable-directives",
  // ],
};
