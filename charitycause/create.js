import { applyParams, save, ActionOptions, CreateCharitycauseActionContext } from "gadget-server";

/**
 * @param { CreateCharitycauseActionContext } context
 */
export async function run({ params, record, logger, api }) {
  applyParams(params, record);
  await save(record);
};

/**
 * @param { CreateCharitycauseActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create"
};
