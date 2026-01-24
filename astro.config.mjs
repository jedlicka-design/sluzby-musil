// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PROD
    ? 'https://jedlicka-design.github.io'
    : undefined,

  base: import.meta.env.PROD
    ? '/sluzby-musil'
    : undefined,

  vite: {
    plugins: [tailwindcss()],
  },
});