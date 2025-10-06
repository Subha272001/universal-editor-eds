module.exports = {
  root: true,
  plugins: ['xwalk'],
  extends: [
    'airbnb-base',
    'plugin:json/recommended',
    'plugin:xwalk/recommended',
  ],
  env: {
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'import/extensions': ['error', { js: 'always' }],
    'linebreak-style': ['error', 'unix'],
    'no-param-reassign': [2, { props: false }],
    'xwalk/max-cells': ['error', { max: 20 }], // <-- ADD THIS
  },
  overrides: [
    {
      files: ['**/*.json'],
      rules: {
        'xwalk/invalid-field-name': 'off', // Disable this only for JSON
      },
    },
  ],
};
