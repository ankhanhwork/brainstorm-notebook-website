import { defineConfig } from 'vite'

export default defineConfig({
  // By default Vite looks for a 'public' folder. 
  // We're setting it to './' to allow 'assets/...' paths 
  // to work for both raw hosting (GitHub Pages) and Vite dev/build.
  publicDir: './', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
