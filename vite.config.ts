import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@state", replacement: path.resolve(__dirname, "./src/state") },
      { find: "@router", replacement: path.resolve(__dirname, "./src/router") },
      { find: "@views", replacement: path.resolve(__dirname, "./src/views") },
      { find: "@utils", replacement: path.resolve(__dirname, "./src/utils") },
      { find: "@services", replacement: path.resolve(__dirname, "./src/services") },
      { find: "@constants", replacement: path.resolve(__dirname, "./src/constants") },

    ],
  },
});
