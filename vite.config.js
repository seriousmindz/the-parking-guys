import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/the-parking-guys/',
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: [
      '8080-iy6pyvmep4c3tg5sk18c7-41554c03.manusvm.computer',
      'localhost',
      '127.0.0.1'
    ]
  }
})
