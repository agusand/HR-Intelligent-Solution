import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checkerPlugin from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    react(),
    checkerPlugin({
      eslint: {
        lintCommand: "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
      },
      typescript: true,
    }),
  ],
  resolve: {
    alias: {
      src: "/src",
      assets: "/src/assets",
      components: "/src/components",
      config: "/src/config",
      pages: "/src/pages",
      services: "/src/services",
      styles: "/src/styles",
      types: "/src/types",
      utils: "/src/utils",
    },
  },
});
