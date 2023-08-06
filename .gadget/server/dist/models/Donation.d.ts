import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, Donation } from "@gadget-client/vueapp";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultDonationServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly charityId: true;
    readonly charity: false;
    readonly amount: true;
    readonly shopId: true;
    readonly shop: false;
    readonly type: true;
};
/** All the data passed to an effect or precondition within the `delete` action on the `donation` model. */
export interface DeleteDonationActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `donation` record this action is operating on.
    */
    record: GadgetRecord<Select<Donation, DefaultDonationServerSelection>>;
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
    context: DeleteDonationActionContext;
}
/** All the data passed to an effect or precondition within the `create` action on the `donation` model. */
export interface CreateDonationActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `donation` record this action is operating on.
    */
    record: GadgetRecord<Select<Donation, DefaultDonationServerSelection>>;
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
    context: CreateDonationActionContext;
}
/** All the data passed to an effect or precondition within the `update` action on the `donation` model. */
export interface UpdateDonationActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `donation` record this action is operating on.
    */
    record: GadgetRecord<Select<Donation, DefaultDonationServerSelection>>;
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
    context: UpdateDonationActionContext;
}
