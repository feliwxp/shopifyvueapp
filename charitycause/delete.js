import { deleteRecord, ActionOptions, DeleteCharitycauseActionContext } from "gadget-server";

/**
 * @param { DeleteCharitycauseActionContext } context
 */
export async function run({ params, record, logger, api }) {
  await deleteRecord(record);
};

/**
 * @param { DeleteCharitycauseActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete"
};
