import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['**/*.js'],
    plugins: {},
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
];