import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "node:url";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: __dirname,
  publicDir: "public",
  server: { port: 5173, strictPort: true },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"), // optional
    },
  },
  build: {
    outDir: path.resolve(__dirname, "../dist/renderer"),
    emptyOutDir: true,
  },
});
