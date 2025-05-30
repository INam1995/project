import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
  proxy: {
    '/api': 'http://localhost:5000',
    '/socket.io': {
      target: 'http://localhost:5000',
      ws: true,
    },
  },
},
});


