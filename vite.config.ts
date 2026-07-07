import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  // نعطّل Nitro المدمج لتجنب تكرار الإضافة
  nitro: false,

  tanstackStart: {
    server: {
      entry: "server",
    },
  },

  vite: {
    plugins: [
      nitro({
        preset: "vercel",
      }),
    ],
  },
});