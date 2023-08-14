// import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),

    quasar({
      sassVariables: "src/quasar-variables.sass",
    }),
    svgLoader(),
    {
      name: "html-transform",
      transformIndexHtml: (html) => {
        return html.replace("__SHOPIFY_API__", process.env.VITE_SHOPIFY_API);
      },
    },
  ],
  // plugins: [react()],
  clearScreen: false,
});
