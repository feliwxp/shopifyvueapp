import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, SessionToken } from "@gadget-client/vueapp";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultSessionTokenServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly token: true;
};
/** All the data passed to an effect or precondition within the `delete` action on the `sessionToken` model. */
export interface DeleteSessionTokenActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `sessionToken` record this action is operating on.
    */
    record: GadgetRecord<Select<SessionToken, DefaultSessionTokenServerSelection>>;
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
    * The context of this action
    */
    context: Omit<DeleteSessionTokenActionContext, "context">;
}
/** All the data passed to an effect or precondition within the `update` action on the `sessionToken` model. */
export interface UpdateSessionTokenActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `sessionToken` record this action is operating on.
    */
    record: GadgetRecord<Select<SessionToken, DefaultSessionTokenServerSelection>>;
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
    * The context of this action
    */
    context: Omit<UpdateSessionTokenActionContext, "context">;
}
/** All the data passed to an effect or precondition within the `create` action on the `sessionToken` model. */
export interface CreateSessionTokenActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `sessionToken` record this action is operating on.
    */
    record: GadgetRecord<Select<SessionToken, DefaultSessionTokenServerSelection>>;
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
    * The context of this action
    */
    context: Omit<CreateSessionTokenActionContext, "context">;
}
