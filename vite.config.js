// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    include: /\.(js|jsx)$/, // Include both .js and .jsx files
    exclude: /node_modules/, // Exclude node_modules (optional)
    loader: 'jsx', // Treat .js files as containing JSX
    jsx: 'automatic', // Use the modern JSX runtime
    target: 'es2020', // Target modern JavaScript
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx', // Map .js files to use jsx loader
      },
    },
  },
})