module.exports = {
  hooks: {
    "pre-commit": "lint-staged", // too slow
    // 'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
