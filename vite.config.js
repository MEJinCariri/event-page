import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/event-page/', // Altere isso para o caminho do seu projeto
  plugins: [react()],
})
