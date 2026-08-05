import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Finálna doména projektu (používa sa pre canonical, og:url a sitemap)
  site: 'https://go.gssolar.sk',
  // Stránka žije na podceste /fotovoltaika — všetky interné cesty tvor cez helper zaklad() z data/url.ts
  base: '/fotovoltaika',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/dakujeme'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
