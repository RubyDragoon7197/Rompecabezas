import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path para GitHub Pages
  base: '/rompecabezas/', 
  server: {
    open: true, // abre automáticamente el navegador al iniciar dev
  },
  build: {
    outDir: 'dist', // carpeta de salida, coincidiendo con gh-pages
  }
})
