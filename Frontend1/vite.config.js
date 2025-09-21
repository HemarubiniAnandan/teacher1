import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // frontend runs at http://localhost:3000
    proxy: {
      "/api": {
        target: "http://localhost:5000", // your backend server
        changeOrigin: true,
        secure: false
      }
    }
  }
});
