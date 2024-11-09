// Vitest config reference: https://vitest.dev/config/file.html#managing-vitest-config-file
/// <reference types="vitest/config" />

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    coverage: {
      all: true,
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.tsx'],
      exclude: [],
    },
  },
});
