import { defineConfig } from "vite";
import Unfonts from "unplugin-fonts/vite";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      google: {
        families: ["Open Sans"],
      },
    }),
  ],
});
