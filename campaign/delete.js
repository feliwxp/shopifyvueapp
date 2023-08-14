import { deleteRecord, ActionOptions, DeleteCampaignActionContext } from "gadget-server";

/**
 * @param { DeleteCampaignActionContext } context
 */
export async function run({ params, record, logger, api }) {
  await deleteRecord(record);
};

/**
 * @param { DeleteCampaignActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete"
};
