import { defineConfig } from 'vite'
import { resolve } from 'path'
// If react is not actually used, we can leave the plugin as is, but we need to add the build config.
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        empre: resolve(__dirname, 'abc-empre.html'),
        tyf: resolve(__dirname, 'abc-tyf.html'),
        eva: resolve(__dirname, 'abc-eva.html'),
      }
    }
  }
})
