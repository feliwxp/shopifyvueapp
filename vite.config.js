// import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  // plugins: [react()],
  clearScreen: false,
});
