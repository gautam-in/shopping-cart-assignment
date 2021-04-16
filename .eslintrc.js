module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    process: 'readonly',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': 0,
    'eol-last': ['error', 'always'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-mixed-spaces-and-tabs': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 'off',
  },
};
