
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'dotenv/config'

// https://vitejs.dev/config/
const port = parseInt(process.env.PORT || '5173')

export default defineConfig({
  plugins: [react()],
  base: './', // important so assets work when loaded via file:// in production
  server: {
    port,
    strictPort: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
