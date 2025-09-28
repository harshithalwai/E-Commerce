import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  theme:{
    extend:{
      colors:{
        primary:"#ff5252",
        secondary:"#1e293b",
      },
      background:{
        primary:"#ff5252"
      }
    }
  },
  server: {
    host: "0.0.0.0",
    port:3000
  }
})
