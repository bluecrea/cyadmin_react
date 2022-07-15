module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  root: true,
  env: {
    node: true
  },
  globals: {
    page: true,
    REACT_APP_ENV: true
  },
  plugins: ['prettier'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    quotes: [2, 'single'],
    curly: ['error', 'all'],
    eqeqeq: 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    'constructor-super': 'error',
    'comma-style': ['error', 'last'],
    'comma-dangle': 'error',
    'semi': [2, 'never'],
    'no-var': 'error',
    'padded-blocks': 'off',
    'space-before-function-paren': ['off', 'always'],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'object-curly-spacing': [0, 'always'],
    'no-multiple-empty-lines': ['error', { max: 3 }],
    'no-extra-semi': 2,
    'no-empty': 2,
    'no-fallthrough': 2,
    'no-func-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 'off',
    'no-use-before-define': 0,
    'no-mixed-spaces-and-tabs': 2,
    'no-self-assign': 'error',
    'no-trailing-spaces': 'off'
  }
};
