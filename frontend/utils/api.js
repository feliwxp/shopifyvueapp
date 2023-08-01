import { Client } from "@gadget-client/vueapp";

// export const api = new Client({ environment: window.gadgetConfig.environment });

// console.log(process.env.VUE_APP_API_URL);
// export const api = new Client({
//   environment: window.gadgetConfig.environment,
//   authenticationMode: { apiKey: window.gadgetConfig.apiKeys.shopify },
// });

export const api = new Client({
  environment: "development",
  authenticationMode: { apiKey: "gsk-TPYahGNHd7mMVfFD2RyiQtjEYUGgARAY" },
});
