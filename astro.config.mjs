// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: isProd ? 'https://jedlicka-design.github.io' : undefined,
  base: isProd ? '/sluzby-musil' : undefined,
  vite: {
    plugins: [tailwindcss()]
  }
});
