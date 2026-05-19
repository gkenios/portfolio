import { defineConfig } from 'vite';
import ViteWebfontDownload from 'vite-plugin-webfont-dl';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

import { FULL_NAME, ROLE, ABOUT, CONTACT_DETAILS } from './src/data/me';

const description = ABOUT.replace(/\s+/g, ' ').trim();

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: FULL_NAME,
  jobTitle: ROLE,
  description,
  email: CONTACT_DETAILS.email,
  sameAs: [CONTACT_DETAILS.github, CONTACT_DETAILS.linkedin],
});

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteWebfontDownload(),
    {
      name: 'html-inject',
      transformIndexHtml(html) {
        return html
          .replace(/\{\{FULL_NAME\}\}/g, FULL_NAME)
          .replace(/\{\{ROLE\}\}/g, ROLE)
          .replace(/\{\{DESCRIPTION\}\}/g, description)
          .replace(/\{\{JSON_LD\}\}/g, jsonLd);
      },
    },
  ],
});
