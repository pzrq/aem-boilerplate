module.exports = {
  root: true,
  extends: ['airbnb-base', 'plugin:import/recommended'],
  env: {
    browser: true,
  },
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    // allow reassigning param
    'no-param-reassign': [2, { props: false }],
    'linebreak-style': ['error', 'unix'],
    'import/extensions': ['error', {
      js: 'always',
    }],
  },
};
