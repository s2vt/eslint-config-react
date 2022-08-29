module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react-hooks'],
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'no-shadow': 0,
    'react/prop-types': 0,
    'no-redeclare': 'off',
    'no-confusing-arrow': 'off',
    'no-console': 'off',
    'no-undef': 'off',
    'no-unsafe-optional-chaining': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'prefer-regex-literals': 'off',
    'default-param-last': 'off',
    indent: 'off',
    'no-restricted-exports': 'off',
    'no-case-declarations': 'off',
    'no-param-reassign': 'off',
    'no-promise-executor-return': 'off',
    'function-paren-newline': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-newline': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/display-name': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
  },
};
