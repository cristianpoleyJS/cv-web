module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never'
      }
    ],
    'vue/valid-v-html': 'off',
    'vue/no-v-html': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
