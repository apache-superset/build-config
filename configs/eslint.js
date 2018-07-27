/* eslint sort-keys: off */
const { EXTS } = require('./constants');

module.exports = function eslint() {
  return {
    root: true,
    extends: ['airbnb', 'prettier'],
    plugins: ['promise', 'compat', 'babel', 'prettier'],
    ignore: ['esm/', 'lib/', 'build/', '*.min.js', '*.map', 'node_modules/'],
    env: {
      browser: true,
    },
    globals: {
      __DEV__: true,
    },
    settings: {
      polyfills: ['promises'],
      'import/extensions': EXTS,
      'import/resolver': {
        node: {
          extensions: EXTS,
        },
      },
    },
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 2018,
      ecmaFeatures: {
        jsx: true,
        experimentalObjectRestSpread: true,
      },
    },
    rules: {
      'class-methods-use-this': 'off',
      'multiline-comment-style': 'off',
      'no-else-return': ['error', { allowElseIf: true }],
      'no-invalid-this': 'off', // Handled by babel/no-invalid-this
      'object-curly-spacing': 'off', // Handled by babel/object-curly-spacing
      'padded-blocks': [
        'error',
        {
          // Never apply to blocks
          classes: 'never',
          switches: 'never',
        },
      ],
      'babel/new-cap': 'error',
      'babel/no-invalid-this': 'error',
      'babel/object-curly-spacing': ['error', 'always'],
      'babel/semi': 'error',
      'compat/compat': 'error', // browser compatibility
      'prettier/prettier': 'error',
      'promise/always-return': 'error',
      'promise/avoid-new': 'off',
      'promise/catch-or-return': 'error',
      'promise/no-callback-in-promise': 'error',
      'promise/no-native': 'off',
      'promise/no-nesting': 'off',
      'promise/no-new-statics': 'error',
      'promise/no-promise-in-callback': 'error',
      'promise/no-return-in-finally': 'error',
      'promise/no-return-wrap': ['error', { allowReject: true }],
      'promise/param-names': 'error',
      'promise/valid-params': 'error',
      'react/sort-prop-types': 'off', // Handled by sort-keys
      'react/jsx-sort-default-props': 'off', // Handled by sort-keys

      // New and not in Airbnb
      'react/no-unsafe': 'error',

      // Want to support but disabled in Airbnb
      complexity: ['error', 11], // eslint-disable-line no-magic-numbers
      'newline-before-return': 'error',
      'no-constant-condition': 'error',
      'no-div-regex': 'error',
      'no-eq-null': 'error',
      'no-implicit-coercion': 'error',
      'no-magic-numbers': [
        'error',
        {
          ignore: [-1, 0, 1, 2, 3],
          ignoreArrayIndexes: true,
          enforceConst: true,
        },
      ],
      'no-native-reassign': 'error',
      'no-negated-condition': 'error',
      'no-useless-call': 'error',
      'sort-keys': [
        'error',
        'asc',
        {
          caseSensitive: false,
          natural: true,
        },
      ],
      'import/default': 'error',
      'import/no-anonymous-default-export': [
        'error',
        {
          allowArray: true,
          allowLiteral: true,
          allowObject: true,
        },
      ],
      'react/forbid-foreign-prop-types': 'error',
      'react/jsx-handler-names': [
        'error',
        {
          eventHandlerPrefix: 'handle',
          eventHandlerPropPrefix: 'on',
        },
      ],
      'react/jsx-key': 'error',
      'react/jsx-no-literals': 'error',
      'react/no-did-mount-set-state': 'error',
      'react/no-direct-mutation-state': 'error',

      'no-unused-vars': ['warn', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
      'import/extensions': [
        'error',
        'never',
        {
          json: 'always',
        },
      ],
      'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],

      // Doesnt work with Prettier
      'function-paren-newline': 'off',
      'react/jsx-one-expression-per-line': 'off',
    },
  };
};
