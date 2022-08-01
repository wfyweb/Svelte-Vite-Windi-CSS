import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  attributify: true,
  plugins: [
    svelte(),
    WindiCSS(),
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    }
  }
})
