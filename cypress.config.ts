import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://0.0.0.0:8080',
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})
