import { applyParams, save, ActionOptions, CreateSessionTokenActionContext } from "gadget-server";

/**
 * @param { CreateSessionTokenActionContext } context
 */
export async function run({ params, record, logger, api }) {
  applyParams(params, record);
  await save(record);
};

/**
 * @param { CreateSessionTokenActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create"
};
