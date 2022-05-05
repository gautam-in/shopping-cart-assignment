module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'prettier/react',
        'plugin:react/recommended',
        'plugin:jsx-a11y/strict',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['node_modules/', 'coverage/', 'android/', 'ios/'],
    plugins: ['react-hooks', 'prefer-arrow'],
    rules: {
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        ],
        'react/jsx-fragments': [1, 'syntax'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'prefer-arrow/prefer-arrow-functions': [
            'error',
            {
                disallowPrototype: true,
                singleReturnOnly: false,
                classPropertiesAllowed: false,
            },
        ],
        'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
        'func-style': ['error', 'expression', { allowArrowFunctions: true }],
        '@typescript-eslint/no-explicit-any': 'error',
        // makes object defs shorter but comes at the cost of a slight possibility
        // of subtle bugs due to mass find/replace operations. typescript compilation would fail in those cases
        // but it would silently pass in plain javascript/es6 so it's ok to be more explicit.
        // "object-shorthand": ["error", "never"],
        // on the fence about this. revisit.
        // we dont need to see helper/util functions on top of a file.
        // the topmost one should be what the file is for (a react component for example)
        '@typescript-eslint/no-use-before-define': 'off',
        'react/prop-types': ['off'],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/no-unused-expressions': 'off',
            },
        },
    ],
};
