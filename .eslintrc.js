module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/comment-directive': 'off',
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off',
    'no-template-curly-in-string': 'off',
    'eol-last': 'off',
    'no-const-assign': 'off'
  }
}
