import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://runbook-projects.github.io/rustconf-2026',
  base: '/rustconf-2026',
  output: 'static',
  build: {
    assets: 'assets',
  },
});