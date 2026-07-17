// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://gillbro.github.io',
	base: '/broccoli-church',
	integrations: [sitemap()],
});
