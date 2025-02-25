module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 15,
    sourceType: 'module',
  },
  rules: {
    'padded-blocks': 'off',
    'eol-last': 'off',
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-return-await': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'max-len': 'off',
  },
};