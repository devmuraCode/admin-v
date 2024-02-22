import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteCSSExportPlugin from 'vite-plugin-css-export'
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteCSSExportPlugin()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  }
})

