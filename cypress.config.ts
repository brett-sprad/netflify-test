import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://0.0.0.0:3000',
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})
