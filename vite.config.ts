import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/GGNTU/", // Важно для GitHub Pages
  build: {
    outDir: "dist", // Папка для билда
  },
  server: {
    port: 3000,
  },
});