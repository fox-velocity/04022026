import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/04022026/', // Doit correspondre exactement au nom du dépôt GitHub
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  }
});
