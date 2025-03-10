import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Disable TypeScript checking in Vite
  optimizeDeps: {
    esbuildOptions: {
      tsconfigRaw: {
        compilerOptions: {
          skipLibCheck: true,
        }
      }
    }
  },
  build: {
    // Skip TypeScript type checking
    typescript: {
      noEmit: false,
      noEmitOnError: false,
    }
  }
})
