import globals from 'globals';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { FlatCompat } from '@eslint/eslintrc';
import googleappsscriptPlugin from 'eslint-plugin-googleappsscript';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const gasGlobals = Object.fromEntries(
  Object.entries(googleappsscriptPlugin.environments.googleappsscript.globals).map(
    ([key]) => [key, 'readonly'],
  ),
);

export default [
  {
    ignores: ['**/*.js', '**/*.d.ts'],
  },
  ...compat.extends('airbnb-base').map((config) => ({ ...config, files: ['**/*.ts'] })),
  {
    files: ['**/*.ts'],
    settings: {
      'import/extensions': ['.ts', '.cts', '.mts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'],
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.cts', '.mts', '.tsx'],
      },
      'import/resolver': {
        node: {
          extensions: ['.ts', '.cts', '.mts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'],
        },
      },
    },
    rules: {
      'import/named': 'off',
    },
  },
  {
    files: ['**/*.ts'],
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      globals: {
        ...globals.es2015,
        ...globals.node,
        ...gasGlobals,
        Todoist: 'readonly',
        TODOIST_TOKEN: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'default', format: ['camelCase'] },
        { selector: 'variable', format: ['camelCase', 'UPPER_CASE'] },
        { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' },
        { selector: 'memberLike', modifiers: ['private'], format: ['camelCase'] },
        { selector: 'typeLike', format: ['PascalCase'] },
        { selector: 'function', modifiers: ['global'], format: ['camelCase'], trailingUnderscore: 'allow' },
        { selector: 'classProperty', modifiers: ['static', 'readonly'], format: ['UPPER_CASE'] },
      ],
      '@typescript-eslint/no-unused-vars': 'error',
      camelcase: 'off',
      'import/extensions': ['error', 'ignorePackages', { ts: 'never', js: 'never' }],
      'import/prefer-default-export': 'off',
      'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
      'no-underscore-dangle': ['error', { allowAfterThis: true }],
      'no-unused-vars': 'off',
    },
  },
];