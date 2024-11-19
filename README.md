# Base React Vite

## Packages

- vitest
- axios
- @tanstack/react-query
- tailwind
- ...

## Install vitest

- `pnpm add -D vitest`
- `pnpm add -D @testing-library/react @testing-library/jest-dom @testing-library/user-event`: utilities to render React components, query elements, and simulate user interactions
- `pnpm add -D jsdom`: for testing React components that interact with the DOM (e.g., reading from or writing to the document)

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

Creata a `setupFiles.ts` right in the root folder to provide global setup or configuration for your tests

```ts
// setupTests.ts
import '@testing-library/jest-dom/vitest'; // Provide Jest DOM apis like: toHaveTextContent() and toHaveClass() so we can use them globally without importing the library in each test file.
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
