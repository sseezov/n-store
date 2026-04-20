import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      }
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxInject: `import { h } from '/src/core/h.js'`,
  },
})