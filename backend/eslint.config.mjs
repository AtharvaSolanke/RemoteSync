// eslint.config.js
import eslintPlugin from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
    eslintPlugin.configs.recommended,
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: './tsconfig.json',
            },
            globals: {
                process: 'readonly',
                console: 'readonly',
                __dirname: 'readonly',
                module: 'readonly',
                require: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            'no-console': 'warn',
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
            ...tsPlugin.configs.recommended.rules,
        },
    },
];
