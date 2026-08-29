import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    vinext(),
    cloudflare({
      viteEnvironment: { name: "ssr" },
    }),
  ],
});
