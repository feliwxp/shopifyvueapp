// All the generated types for the "charity" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, Charity } from "@gadget-client/vueapp";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultCharityServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly name: true;
      readonly website_url: true;
      readonly donations: false;
      readonly description: true;
      readonly causes: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `charity` model. */
export interface CreateCharityActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `charity` record this action is operating on.
  */
  record: GadgetRecord<Select<Charity, DefaultCharityServerSelection>>;
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
  context: CreateCharityActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `charity` model. */
export interface DeleteCharityActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `charity` record this action is operating on.
  */
  record: GadgetRecord<Select<Charity, DefaultCharityServerSelection>>;
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
  context: DeleteCharityActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `charity` model. */
export interface UpdateCharityActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `charity` record this action is operating on.
  */
  record: GadgetRecord<Select<Charity, DefaultCharityServerSelection>>;
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
  context: UpdateCharityActionContext;
};


  