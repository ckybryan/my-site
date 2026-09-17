import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    // Off: a published .js.map ships the full source next to the bundle.
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
    host: '0.0.0.0',
    allowedHosts: true
  },
})
