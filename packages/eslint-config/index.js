module.exports = {
  extends: 'airbnb-base',
  rules: {
    'key-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', { 'code': 120, 'tabWidth': 2 }],
    'operator-linebreak': ['error', 'after'],
    'import/no-unresolved': 'off',
    'no-nested-ternary': 'off',
    'no-bitwise': 'off',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'radix': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'capitalized-comments': ['error', 'always'],
    'multiline-comment-style': ['error', 'starred-block'],
    'no-return-assign': ['error', 'except-parens'],
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': true,
      'optionalDependencies': true,
      'peerDependencies': false,
    }],
    'no-new': 'off',
  },
};