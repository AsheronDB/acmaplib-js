import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "acmaplib",
      // the proper extensions will be added
      fileName: "acmaplib",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
    },
  },
});
