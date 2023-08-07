/**
* This is the Gadget server side types library for:
*
*  __     __
*  \ \   / /   _  ___  __ _ _ __  _ __
*   \ \ / / | | |/ _ \/ _` | '_ \| '_ \
*    \ V /| |_| |  __/ (_| | |_) | |_) |
*     \_/  \__,_|\___|\__,_| .__/| .__/
*                          |_|   |_|
*
* Built for environment `"Development"` at version "588"
* Edit this app here: https://"vueapp".gadget.dev/edit
*/
import { FastifyLoggerInstance } from "fastify";
import type { Client } from "@gadget-client/vueapp";
export * from "./routes";
export * from "./types";
export * from "./AppConfiguration";
export * from "./AppConnections";
export * from "./global-actions";
export * from "./AmbientContext";
export { InvalidStateTransitionError } from "./errors";
export * from "./models/Session";
export * from "./models/ShopifyGdprRequest";
export * from "./models/ShopifyProduct";
export * from "./models/ShopifyShop";
export * from "./models/ShopifySync";
export * from "./models/Charity";
export * from "./models/Donation";
export * from "./models/Cause";
export * from "./models/Charitycause";
export * from "./effects";
/**
 * An instance of the Gadget logger
 */
declare let logger: FastifyLoggerInstance;
/**
 * An instance of the Gadget API client that has admin permissions
 */
declare let api: Client;
export { logger, api };
