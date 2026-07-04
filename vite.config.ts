import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Set `base` to the repository subpath so assets and router work on GitHub Pages
export default defineConfig({
  base: '/portfolio/',
  plugins: [vue()],
  server: {
    port: 5173
  }
})
