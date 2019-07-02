module.exports = {
  extends: [
    'airbnb',
    '@blue-tomato'
  ],
  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
  ],
  rules: {
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
};
