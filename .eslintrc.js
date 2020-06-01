const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    worker: true,
    serviceworker: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  plugins: [
    'vue',
    'import',
  ],
  settings: {
    'import/resolver': {
      webpack: 'webpack.config.js',
    },
  },
  globals: {
    'process': true,
    'window': true,
  },
  rules: {
    'arrow-body-style': 'off',
    'brace-style': ['error', 'stroustrup'],
    'camelcase': ['off', {
      'properties': 'always',
    }],
    'func-names': ['error', 'never'],
    'function-paren-newline': ['error', 'consistent'],
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': ['error', {
      'ignore': ['^@'],
    }],
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'unix'],
    'max-len': 'off',
    'no-console': !isProd ? 'off' : ['error', {
      'allow': ['warn', 'error'],
    }],
    'import/extensions': 'off',
    'no-debugger': isProd ? 'error' : 'off',
    'no-extend-native': 'error',
    'no-global-assign': 'error',
    'no-param-reassign': ['error', {
      'props': false,
    }],
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': ['error', 'before'],
    'prefer-destructuring': 'off',
    'radix': 'off',
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    'spaced-comment': 'off',
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'always',
        'component': 'always',
      },
      'svg': 'always',
      'math': 'always',
    }],
    'vue/no-v-html': 'off',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'indent': 'off',
      },
    },
    {
      files: ['src/store/*.js'],
      rules: {
        'no-shadow': 'off',
      },
    },
  ],
};
