import { createApp } from "@shopify/app-bridge";

const host =
  new URLSearchParams(location.search).get("host") || window.__SHOPIFY_DEV_HOST;

window.__SHOPIFY_DEV_HOST = host;
console.log(process.env.NODE_API);
console.log(process.env.SHOPIFY_API_KEY);
export const shopifyAppBridgePlugin = {
  install: (app) => {
    const appBridge = createApp({
      apiKey: process.env.SHOPIFY_API_KEY,
      host: host,
      forceRedirect: true,
    });

    app.config.globalProperties.$appBridge = appBridge;
    app.provide("useAppBridge", appBridge);
  },
};
