import { defineConfig } from 'vite'
base: "/my-newportfolio"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
