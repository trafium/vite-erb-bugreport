import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import ErbPlugin from 'vite-plugin-erb'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    ErbPlugin(),
  ],
})
