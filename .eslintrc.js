module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
    es6: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
  }
}
