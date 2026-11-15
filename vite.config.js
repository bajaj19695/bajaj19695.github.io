import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// base './' lets the build work on GitHub Pages (user site or repo site), Vercel and Netlify.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
