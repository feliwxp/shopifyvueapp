import { deleteRecord, ActionOptions, DeleteSessionTokenActionContext } from "gadget-server";

/**
 * @param { DeleteSessionTokenActionContext } context
 */
export async function run({ params, record, logger, api }) {
  await deleteRecord(record);
};

/**
 * @param { DeleteSessionTokenActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete"
};
