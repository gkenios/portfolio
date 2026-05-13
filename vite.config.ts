import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { FULL_NAME, ROLE } from './src/data/me'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'html-inject',
      transformIndexHtml(html) {
        return html
          .replace(/\{\{FULL_NAME\}\}/g, FULL_NAME)
          .replace(/\{\{ROLE\}\}/g, ROLE)
      },
    },
  ],
})
