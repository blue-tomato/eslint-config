module.exports = {
  extends: 'airbnb-base',
  rules: {
    "key-spacing": "warn",
    "object-curly-spacing": ["warn", "always"],
    "max-len": ["warn", { "code": 120, "tabWidth": 2 }],
    "operator-linebreak": ["warn", "after"],
    "import/no-unresolved": "off",
    "no-nested-ternary": "off",
    "no-bitwise": "off",
    "class-methods-use-this": "off",
    "global-require": "off",
    "import/no-dynamic-require": "off",
    "radix": ["warn", "as-needed"]
  },
};
