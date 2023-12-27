import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import myCV from './src/static/DianaLoboaCV.pd';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.pdf'],
})
