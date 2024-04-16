import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": "/src/app",
      "@pages": "/src/pages",
      "@entities": "/src/entities",
      "@features": "/src/features",
      "@widgets": "/src/widgets",
      "@shared": "/src/shared",
    },
  },
});
