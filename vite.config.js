import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/AESTHETICS/', // Match your GitHub repository name
  plugins: [vue()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Enable code splitting for large components
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
          if (id.includes('src/components/')) {
            const name = id.split('src/components/')[1].split('.')[0];
            if ([
              'About',
              'BlogDetail',
              'Blogs',
              'Contact',
              'Home',
              'Services',
              'Welcome',
              'AestheticsValues',
              'MainFooter'
            ].includes(name)) {
              return `component-${name}`;
            }
          }
        }
      }
    }
  }
})
