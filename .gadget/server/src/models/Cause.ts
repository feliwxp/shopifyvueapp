// All the generated types for the "cause" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, Cause } from "@gadget-client/vueapp";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultCauseServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly category: true;
      readonly charity: false;
  };

  
/** All the data passed to an effect or precondition within the `update` action on the `cause` model. */
export interface UpdateCauseActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `cause` record this action is operating on.
  */
  record: GadgetRecord<Select<Cause, DefaultCauseServerSelection>>;
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
  context: UpdateCauseActionContext;
};


    
/** All the data passed to an effect or precondition within the `create` action on the `cause` model. */
export interface CreateCauseActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `cause` record this action is operating on.
  */
  record: GadgetRecord<Select<Cause, DefaultCauseServerSelection>>;
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
  context: CreateCauseActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `cause` model. */
export interface DeleteCauseActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `cause` record this action is operating on.
  */
  record: GadgetRecord<Select<Cause, DefaultCauseServerSelection>>;
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
  context: DeleteCauseActionContext;
};


  