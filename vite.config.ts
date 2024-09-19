import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      rollupTypes: true,
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: ["dist", "node_modules"],
    }),
  ],
  build: {
    // library entry and output settings
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "gogroup-ui",
      fileName: "gogroup-ui",
    },
    // bundler options
    // externalize react-related imports
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@mui/material",
        "@emotion/react",
      ], //Adding mui external
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
          "@mui/material": "MaterialUI", //Adding extra globals
          "@emotion/react": "Emotion",
        },
      },
    },
  },
});
