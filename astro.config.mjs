// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind({applyBaseStyles:false}), icon(), expressiveCode({themes:['vitesse-dark']})]
});