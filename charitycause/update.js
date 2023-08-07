import { applyParams, save, ActionOptions, UpdateCharitycauseActionContext } from "gadget-server";

/**
 * @param { UpdateCharitycauseActionContext } context
 */
export async function run({ params, record, logger, api }) {
  applyParams(params, record);
  await save(record);
};

/**
 * @param { UpdateCharitycauseActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "update"
};
