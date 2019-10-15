module.exports = {
  extends: [
    'airbnb',
    '@blue-tomato',
    // 'prettier/react',
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
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-newline': 'off',
  },
};
