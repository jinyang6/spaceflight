import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/spaceflight/', // Set this to your GitHub repository name
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        provider: resolve(__dirname, 'provider.html'),
        rocket: resolve(__dirname, 'rocket.html'),
      },
    },
    outDir: 'dist', // Output directory for the build
  },
  // Optional: If you have assets in a public directory (e.g., top-level 'assets')
  // that should be copied as-is to the root of 'dist', you can specify it.
  // publicDir: 'public', 
});