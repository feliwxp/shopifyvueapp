import { Client } from "@gadget-client/vueapp";

export const api = new Client({ environment: window.gadgetConfig.environment });
