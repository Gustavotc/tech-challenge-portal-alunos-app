// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        endOfLine: 'off',
      },
    ],
    'react-hooks/exhaustive-deps': 'off',
  },
};
