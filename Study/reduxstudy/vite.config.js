import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react-router-dom", "prop-types"]
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "/src/setup.js",
  }
});

 