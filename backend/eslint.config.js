import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['*/.js'],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: {
        ...globals.node,   // reconhece process, require, etc.
        ...globals.jest,   // reconhece describe, it, expect, jest, etc.
      },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {},
  },
]);
