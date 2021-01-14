module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-new': 'off',
    'no-shadow': 'off',
    'no-bitwise': 'off',
    'func-names': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'default-case': 'off',
    'prefer-template': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'off',
    'no-restricted-globals': 'off',
    'class-methods-use-this': 'off',
    "comma-dangle": 'off',
    'dot-notation': 'off',
    'semi': 'off',
    'no-multiple-empty-lines': 'off',
    'prefer-destructuring': ['error', { object: true, array: false }],
    // eslint-plugin-import
    'import/order': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    // eslint-plugin-vue
    'vue/no-v-html': 'off',
    'vue/attributes-order': 'off',
    'vue/require-v-for-key': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-unused-components': 'off',
    // 'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/name-property-casing': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    // typescript-eslint
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    ' @typescript-eslint/no-unused-vars': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
