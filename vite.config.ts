import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/3D-Portfolio_Island/",
  plugins: [react()],
  assetsInclude: ['**/*.glb'],

})
