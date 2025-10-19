import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    hmr: {
      protocol: 'wss',
      host: process.env.REPL_SLUG + '.' + process.env.REPL_OWNER + '.repl.co',
      clientPort: 443,
    },
  },
})
