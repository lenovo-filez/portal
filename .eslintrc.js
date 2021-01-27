module.exports = {
  extends: ['plugin:vue/base', 'prettier'],
  plugins: ['prettier', 'vue'],
  env: {
    node: true,
    browser: true,
    es6: true,
    mocha: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    __IS_DEVELOPMENT__: true,
  },
  rules: {
    semi: ['error', 'never'],
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-alert': 'error',
    'prettier/prettier': 'error',
    'no-unused-expressions': 'off',
    'func-names': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
}
