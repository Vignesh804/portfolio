import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => ({
  plugins: [react()],
  // GitHub Pages needs `/portfolio/`, Vercel needs `/`.
  // Set `VITE_BASE=/portfolio/` in GitHub Actions when deploying to Pages.
  base: process.env.VITE_BASE ?? '/',
}))

