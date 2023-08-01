import { Client } from "@gadget-client/pt-feli";

// export const api = new Client({ environment: window.gadgetConfig.environment });

// console.log(process.env.VUE_APP_API_URL);
// export const api = new Client({
//   environment: window.gadgetConfig.environment,
//   authenticationMode: { apiKey: window.gadgetConfig.apiKeys.shopify },
// });

export const api = new Client({
  environment: "development",
  authenticationMode: { apiKey: "gsk-F33wTw4mJBiEe49Tpxw9U3VLwgVizZ9F" },
});