module.exports = {
  extends: "airbnb",
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true
  },
  rules: {
    "dot-notation": 0
  }
};
