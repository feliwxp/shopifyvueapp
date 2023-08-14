import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, Campaign } from "@gadget-client/vueapp";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultCampaignServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly shopId: true;
    readonly shop: false;
    readonly type: true;
    readonly charity: false;
    readonly startDate: true;
    readonly endDate: true;
    readonly activated: true;
    readonly settings: true;
};
/** All the data passed to an effect or precondition within the `create` action on the `campaign` model. */
export interface CreateCampaignActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `campaign` record this action is operating on.
    */
    record: GadgetRecord<Select<Campaign, DefaultCampaignServerSelection>>;
    /**
    * An object passed between all preconditions and effects of an action execution at the `scope` property.
    * Useful for transferring data between effects.
    */
    scope: ActionExecutionScope;
    /**
    * An object describing what started this action execution.
    */
    trigger: ActionTrigger;
    params: {
        [key: string]: string | number | boolean | object | bigint | undefined;
    };
    /**
    * The context of this action. This context does not have a defined inner context.
    */
    context: CreateCampaignActionContext;
}
/** All the data passed to an effect or precondition within the `update` action on the `campaign` model. */
export interface UpdateCampaignActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `campaign` record this action is operating on.
    */
    record: GadgetRecord<Select<Campaign, DefaultCampaignServerSelection>>;
    /**
    * An object passed between all preconditions and effects of an action execution at the `scope` property.
    * Useful for transferring data between effects.
    */
    scope: ActionExecutionScope;
    /**
    * An object describing what started this action execution.
    */
    trigger: ActionTrigger;
    params: {
        [key: string]: string | number | boolean | object | bigint | undefined;
    };
    /**
    * The context of this action. This context does not have a defined inner context.
    */
    context: UpdateCampaignActionContext;
}
/** All the data passed to an effect or precondition within the `delete` action on the `campaign` model. */
export interface DeleteCampaignActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `campaign` record this action is operating on.
    */
    record: GadgetRecord<Select<Campaign, DefaultCampaignServerSelection>>;
    /**
    * An object passed between all preconditions and effects of an action execution at the `scope` property.
    * Useful for transferring data between effects.
    */
    scope: ActionExecutionScope;
    /**
    * An object describing what started this action execution.
    */
    trigger: ActionTrigger;
    params: {
        [key: string]: string | number | boolean | object | bigint | undefined;
    };
    /**
    * The context of this action. This context does not have a defined inner context.
    */
    context: DeleteCampaignActionContext;
}
