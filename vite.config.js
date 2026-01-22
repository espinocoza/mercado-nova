import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Base path for GitHub Pages project site
  // Defaults to '/TareaDiplomadoFinal/' but can be overridden via env VITE_BASE
  base: process.env.VITE_BASE || '/TareaDiplomadoFinal/',
  // Output static build to 'docs' to match GitHub Pages (main/docs)
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  plugins: [react()],
})
