# Base React Vite

## Packages

- vitest
- axios
- @tanstack/react-query
- tailwind

## Install vitest

- `pa -D vitest`
- `pa -D @testing-library/react @testing-library/jest-dom @testing-library/user-event`: utilities to render React components, query elements, and simulate user interactions
- `pa -D jsdom`: for testing React components that interact with the DOM (e.g., reading from or writing to the document)

Config:

```ts
// REMEMBER TO PUT THIS LINE AT THE TOP OF THE FILE
/// <reference types="vitest/config" />

export default defineConfig({
  plugins: [react()],
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
```

## Custom alias

- `pnpm add @types/node`: provides the TypeScript definitions for Node modules, such as `path`, `fs`

```ts
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  ...
});
```

## Install tailwind

- pnpm add -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

In `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

In `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
