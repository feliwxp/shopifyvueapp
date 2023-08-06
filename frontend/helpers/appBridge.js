import { createApp } from "@shopify/app-bridge";
import { History } from "@shopify/app-bridge/actions";

// const host =
//   new URLSearchParams(location.search).get("host") || window.__SHOPIFY_DEV_HOST;
// // Logging all query parameters and their values
// const queryParams = new URLSearchParams(location.search);

// queryParams.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });

// get shop name
window.__SHOPIFY_DEV_HOST = new URLSearchParams(location.search)
  .get("shop")
  .split(".")[0];

// export const shopifyAppBridgePlugin = {
//   install: (app) => {
//     const appBridge = createApp({
//       apiKey: window.gadgetConfig.apiKeys.shopify,
//       host: window.__SHOPIFY_DEV_HOST,
//       forceRedirect: true,
//     });

//     app.config.globalProperties.$appBridge = appBridge;
//     app.provide("useAppBridge", appBridge);
//   },
// };

export const appBridge = createApp({
  apiKey: window.gadgetConfig.apiKeys.shopify,
  host: window.__SHOPIFY_DEV_HOST,
  forceRedirect: true,
});

export const shopifyAppBridgePlugin = {
  install: (app) => {
    appBridge;
    app.config.globalProperties.$appBridge = appBridge;
    app.provide("useAppBridge", appBridge);
  },
};

// export const redirect = Redirect.create(appBridge);

export const history = History.create(appBridge);
