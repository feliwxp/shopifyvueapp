import "./assets/main.css";
import App from "./App.vue";
import PolarisVue from "@ownego/polaris-vue"; // (✓)
import "@ownego/polaris-vue/dist/style.css"; // (✓) This will be deprecated in the future, right after Vue 3 supports css injections.

import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "./router";
// import { shopifyAppBridgePlugin } from "./helpers/appBridge.js";

const app = createApp(App);
// app.use(shopifyAppBridgePlugin);
app.use(createPinia());
app.use(router);
app.use(PolarisVue);
app.mount("#app");
