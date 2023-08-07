import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, Charitycause } from "@gadget-client/vueapp";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultCharitycauseServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly causeId: true;
    readonly cause: false;
    readonly charityId: true;
    readonly charity: false;
};
/** All the data passed to an effect or precondition within the `update` action on the `charitycause` model. */
export interface UpdateCharitycauseActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `charitycause` record this action is operating on.
    */
    record: GadgetRecord<Select<Charitycause, DefaultCharitycauseServerSelection>>;
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
    context: UpdateCharitycauseActionContext;
}
/** All the data passed to an effect or precondition within the `create` action on the `charitycause` model. */
export interface CreateCharitycauseActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `charitycause` record this action is operating on.
    */
    record: GadgetRecord<Select<Charitycause, DefaultCharitycauseServerSelection>>;
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
    context: CreateCharitycauseActionContext;
}
/** All the data passed to an effect or precondition within the `delete` action on the `charitycause` model. */
export interface DeleteCharitycauseActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `charitycause` record this action is operating on.
    */
    record: GadgetRecord<Select<Charitycause, DefaultCharitycauseServerSelection>>;
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
    context: DeleteCharitycauseActionContext;
}
