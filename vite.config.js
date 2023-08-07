// import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

export default defineConfig({
  plugins: [vue(), svgLoader()],
  // plugins: [react()],
  clearScreen: false,
});
