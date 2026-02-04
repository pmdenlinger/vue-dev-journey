// eslint.config.js (ESM)
import js from '@eslint/js';
import globals from 'globals';
import vue from 'eslint-plugin-vue';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-config-prettier';

export default [
  // Ignore outputs and deps
  { ignores: ['dist/**', 'build/**', 'coverage/**', 'node_modules/**'] },

  // JS-based Vite/config files — lint as JS (syntax-only)
  {
    files: ['vite.config.{js,mjs,cjs}', '*.config.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.node },
    },
    // no TS parser/plugins here — keep it fast and syntax-only
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },

  // TS-based Vite/config files — lint without project (syntax-only)
  {
    files: ['vite.config.ts', '*.config.ts', '*.config.mts', '*.config.cts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        // no project here -> syntax-only
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: { ...globals.node },
    },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
    },
  },

  // Examples or docs code: syntax-only as well
  {
    files: ['examples/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
    },
  },

  // Base JS rules
  js.configs.recommended,

  // Vue 3 recommended (flat) — spread at top level
  ...vue.configs['flat/recommended'],

  // Vue SFCs — delegate <script lang="ts"> to TS parser WITH TYPE INFO
  {
    files: ['**/*.vue'],
    languageOptions: {
      // vue-eslint-parser is set by the Vue preset above;
      // we provide the sub-parser for TS + project for type-aware rules:
      parserOptions: {
        parser: tsParser,
        project: ['./tsconfig.eslint.json'], // <— use ESLint-focused tsconfig
        tsconfigRootDir: process.cwd(),
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      // --- Type-aware safety rules (apply to TS inside .vue) ---
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-floating-promises': [
        'error',
        { ignoreVoid: false },
      ],
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-implied-eval': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
      ],
      '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      // common niceties
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      // If you want to silence Vue formatting rules globally, you can add them here later.
    },
  },

  // Pure TypeScript files (type-aware) — SCOPE TO APP CODE ONLY
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.eslint.json'], // <— use ESLint-focused tsconfig
        tsconfigRootDir: process.cwd(),
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      // --- Same type-aware rules for .ts/.tsx ---
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-floating-promises': [
        'error',
        { ignoreVoid: false },
      ],
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-implied-eval': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
      ],
      '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
    },
  },

  // JS files (if any)
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
    },
  },

  // Vitest test files — provide globals like describe/it/vi
  {
    files: ['**/*.{test,spec}.{js,cjs,mjs,ts,tsx}'],
    languageOptions: { globals: globals.vitest },
  },

  // Put Prettier last to disable conflicting ESLint formatting rules
  prettier,
];
