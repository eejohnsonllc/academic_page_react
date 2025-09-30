import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    host: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['bootstrap', 'bulma'],
          utils: ['papaparse', 'aos', 'typewriter-effect']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'bootstrap', 'bulma', 'papaparse', 'aos', 'typewriter-effect']
  }
})