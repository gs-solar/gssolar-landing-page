import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ZMENIŤ: finálna doména projektu (používa sa pre canonical, og:url a sitemap)
  site: 'https://example.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/dakujeme'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
