import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://example.com',
  output: 'server',
  trailingSlash: 'always',
  adapter: cloudflare(),
  integrations: [tailwind()],
})
