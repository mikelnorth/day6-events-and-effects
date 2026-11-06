import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // Standalone projects with their own dev servers. Editing them shouldn't touch this app.
      ignored: ['**/assignment-demos/**', '**/student-projects/**'],
    },
  },
  build: {
    rollupOptions: {
      // index.html is the lesson. live.html runs the files in exercises/.
      input: ['index.html', 'live.html'],
    },
  },
})
