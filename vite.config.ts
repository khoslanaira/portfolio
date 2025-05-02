import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/', // 👈 this is the fix for the blank screen
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
