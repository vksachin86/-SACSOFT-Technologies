import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base './' + single IIFE bundle => dist/index.html works from any static server, even double-clicked (file://)
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { port: 3000, open: true },
  build: { rollupOptions: { output: { format: 'iife', inlineDynamicImports: true } } }
})
