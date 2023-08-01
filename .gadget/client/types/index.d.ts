/**
* This is the Gadget API client library for:
*
*  __     __
*  \ \   / /   _  ___  __ _ _ __  _ __
*   \ \ / / | | |/ _ \/ _` | '_ \| '_ \
*    \ V /| |_| |  __/ (_| | |_) | |_) |
*     \_/  \__,_|\___|\__,_| .__/| .__/
*                          |_|   |_|
*
* Built for environment "Development" at version 9
* API docs: https://docs.gadget.dev/api/vueapp
* Edit this app here: https://vueapp.gadget.dev/edit
*/
export { GadgetConnection, GadgetRecord, GadgetRecordList, GadgetInternalError, GadgetClientError, GadgetOperationError, InvalidRecordError, GadgetValidationError, BrowserSessionStorageType } from "@gadgetinc/api-client-core";
export type { ClientOptions, BrowserSessionAuthenticationModeOptions, InvalidFieldError, AuthenticationModeOptions, Select } from "@gadgetinc/api-client-core";
export * from "./Client.js";
export * from "./types.js";
declare global {
    interface Window {
        gadgetConfig: {
            apiKeys: {
                shopify: string;
            };
            environment: string;
            env: Record<string, any>;
        };
    }
}
