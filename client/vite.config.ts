import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "./src/scss/variables/_borders.scss" as *;
          @use "./src/scss/variables/_fonts.scss" as *;
          @use "./src/scss/variables/_radii.scss" as *;
          @use "./src/scss/variables/_spacings.scss" as *;
          @use "./src/scss/utilities/mixins.scss" as *;
        `,
      },
    },
  },
  plugins: [react()],
});
