import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
    host: '0.0.0.0',
    allowedHosts: [
      'bryan.wtf',
      '.railway.app',
      'localhost',
      '127.0.0.1'
    ]
  },
})
