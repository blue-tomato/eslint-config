const prettierConfig = require('./prettier.config');

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'import',
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'key-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', { code: 120, tabWidth: 2 }],
    'operator-linebreak': 'off',
    'import/no-unresolved': 'off',
    'no-nested-ternary': 'off',
    'no-bitwise': 'off',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'radix': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'capitalized-comments': 'off',
    'multiline-comment-style': ['error', 'separate-lines'],
    'no-return-assign': ['error', 'except-parens'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: true,
      peerDependencies: false,
    }],
    'no-new': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'import/no-cycle': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-underscore-dangle': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'import/extensions': 'off',
    'import/order': ['error', { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'] }],
  },
};
