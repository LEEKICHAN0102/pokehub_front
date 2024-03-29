import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: true,
  },
  server: {
    port: 3000, // 또는 다른 포트 번호
  },
})
