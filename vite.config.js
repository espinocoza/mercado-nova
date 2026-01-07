import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Base path for GitHub Pages project site: https://<user>.github.io/<repo>/
  base: '/Tarea/',
  plugins: [react()],
})
