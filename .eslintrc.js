module.exports = {
    'env': {
        'browser': true,
        'es2021': true, 
        'node':true
   },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'no-console': 'error',
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'react/react-in-jsx-scope': 'off',
        'quotes': ['error', 'single', {
            'allowTemplateLiterals': true
          }]
    }
};
