import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/sanity': {
        target: 'https://zmwf3iga.api.sanity.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/sanity/, ''),
        secure: false,
      }
    }
  }
})
