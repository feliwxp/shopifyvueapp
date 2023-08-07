import { deleteRecord, ActionOptions, DeleteCauseActionContext } from "gadget-server";

/**
 * @param { DeleteCauseActionContext } context
 */
export async function run({ params, record, logger, api }) {
  await deleteRecord(record);
};

/**
 * @param { DeleteCauseActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete"
};
