import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './', // Using relative paths for easy deployment on GitHub Pages
  publicDir: 'public', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        customization: resolve(__dirname, 'customization.html'),
        shipping: resolve(__dirname, 'shipping.html'),
        checkout: resolve(__dirname, 'checkout.html'),
        thankyou: resolve(__dirname, 'thankyou.html')
      }
    }
  }
})
