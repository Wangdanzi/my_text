// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    'eslint:recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-trailing-spaces': 'error', // 禁止行尾空格
    'linebreak-style': [0, 'error', 'windows'],
    'import/extensions': 'off',
    "comma-dangle": ["error", "never"], // 禁止行尾逗号
    "semi": ["error", "never"], // 禁止分号
    "space-before-blocks": "error", // 强制在块之前使用一致的空格
    "comma-spacing": "error", // 逗号后面加空格
    'indent': [2, 2, {
      'SwitchCase': 1
    }], //
  },
}