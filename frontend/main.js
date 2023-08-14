import "./assets/main.css";
import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";

import PolarisVue from "@ownego/polaris-vue"; // (✓)
import "@ownego/polaris-vue/dist/style.css"; // (✓) This will be deprecated in the future, right after Vue 3 supports css injections.

import { Quasar } from "quasar";
// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
// Import Quasar css
import "quasar/src/css/index.sass";

import router from "./router";
// import { shopifyAppBridgePlugin } from "./helpers/appBridge.js";

const app = createApp(App);
// app.use(shopifyAppBridgePlugin);
app.use(createPinia());
app.use(router);
app.use(PolarisVue);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});
app.mount("#app");
