module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:jest/all', 'plugin:prettier/recommended'],
  rules: {
    'no-console': 0,
  },
};
