// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PROD
    ? 'https://www.sluzby-musil.cz'
    : undefined,

  base: import.meta.env.PROD
    ? ''
    : undefined,

  vite: {
    plugins: [tailwindcss()],
  },
});