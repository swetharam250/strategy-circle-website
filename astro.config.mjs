import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.strategycircle.co.in',
  output: 'static',

  build: {
    inlineStylesheets: 'auto',
  },

  integrations: [react(), markdoc(), keystatic(), sitemap()],
  adapter: vercel(),
});