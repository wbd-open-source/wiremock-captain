import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
    {
        ignores: ['coverage/**', 'dist/**'],
    },
    {
        languageOptions: {
            globals: globals.node,
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['test/**/*.ts'],
        languageOptions: {
            globals: globals.jest,
        },
    },
    eslintPluginPrettierRecommended,
];
