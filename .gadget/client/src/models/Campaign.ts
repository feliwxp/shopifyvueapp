import {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordImplementation,
  GadgetRecordList,
  GadgetNonUniqueDataError,
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner,
  DefaultSelection,
  LimitToKnownKeys,
  Selectable
} from "@gadgetinc/api-client-core";

import {
  Query,
  ExplicitNestingRequired,
  Select,
  DeepFilterNever,
      Campaign,
      CampaignSort,
      CampaignFilter,
      AvailableCampaignSelection,
      CreateCampaignInput,
      UpdateCampaignInput,
      BulkDeleteCampaignsResult,
  
} from "../types.js";

export const DefaultCampaignSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "type": true,
  "startDate": true,
  "endDate": true,
  "activated": true,
  "settings": true
} as const;

/** 
* Produce a type that holds only the selected fields (and nested fields) of "campaign". The present fields in the result type of this are dynamic based on the options to each call that uses it. 
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above. 
*/
export type SelectedCampaignOrDefault<Options extends Selectable<AvailableCampaignSelection>> = DeepFilterNever<
  Select<
    Campaign, 
    DefaultSelection<
      AvailableCampaignSelection,
      Options,
      typeof DefaultCampaignSelection
    >
  >>;

/** Options that can be passed to the `CampaignManager#findOne` method */
export interface FindOneCampaignOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCampaignSelection;
};


/** Options that can be passed to the `CampaignManager#maybeFindOne` method */
export interface MaybeFindOneCampaignOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCampaignSelection;
};


/** Options that can be passed to the `CampaignManager#findMany` method */
export interface FindManyCampaignsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCampaignSelection;
  /** Return records sorted by these sorts */
  sort?: CampaignSort | CampaignSort[] | null;
  /** Only return records matching these filters. */
  filter?: CampaignFilter | CampaignFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};


/** Options that can be passed to the `CampaignManager#findFirst` method */
export interface FindFirstCampaignOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCampaignSelection;
  /** Return records sorted by these sorts */
  sort?: CampaignSort | CampaignSort[] | null;
  /** Only return records matching these filters. */
  filter?: CampaignFilter | CampaignFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


/** Options that can be passed to the `CampaignManager#maybeFindFirst` method */
export interface MaybeFindFirstCampaignOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCampaignSelection;
  /** Return records sorted by these sorts */
  sort?: CampaignSort | CampaignSort[] | null;
  /** Only return records matching these filters. */
  filter?: CampaignFilter | CampaignFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};



export interface CreateCampaignOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCampaignSelection;
};



export interface UpdateCampaignOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCampaignSelection;
};



export interface DeleteCampaignOptions {
};




    
  type createCampaignVariables =
      CreateCampaignInput



/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createCampaign<Options extends CreateCampaignOptions>(
  
    variables: createCampaignVariables,

  options?: LimitToKnownKeys<Options, CreateCampaignOptions>
): Promise<SelectedCampaignOrDefault<Options> extends void ? void : GadgetRecord<SelectedCampaignOrDefault<Options>>>

// Default nested api identifier overload
async function createCampaign<Options extends CreateCampaignOptions>(
  
      variables: {
          campaign?: CreateCampaignInput,
        },
  
  options?: LimitToKnownKeys<Options, CreateCampaignOptions>
): Promise<SelectedCampaignOrDefault<Options> extends void ? void : GadgetRecord<SelectedCampaignOrDefault<Options>>>;

// Function implementation
async function createCampaign<Options extends CreateCampaignOptions>(
  this: CampaignManager,
  
      variables: {
          campaign?: CreateCampaignInput,
        }
    
      | createCampaignVariables
    ,
  
  options?: LimitToKnownKeys<Options, CreateCampaignOptions>
): Promise<SelectedCampaignOrDefault<Options> extends void ? void : GadgetRecord<SelectedCampaignOrDefault<Options>>>
 {
    let newVariables: {
      campaign?: CreateCampaignInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "campaign";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: CreateCampaignInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof CreateCampaignInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedCampaignOrDefault<Options>>(
      this,
      "createCampaign",
      DefaultCampaignSelection,
      "campaign",
      "campaign",
      false,
      {
        "campaign": {
          value: newVariables.campaign,
          required: false,
          type: "CreateCampaignInput",
        },
      },
      options,
      null
    ));
  }
  
    
  type updateCampaignVariables =
      UpdateCampaignInput



/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateCampaign<Options extends UpdateCampaignOptions>(
  id: string,
    variables: updateCampaignVariables,

  options?: LimitToKnownKeys<Options, UpdateCampaignOptions>
): Promise<SelectedCampaignOrDefault<Options> extends void ? void : GadgetRecord<SelectedCampaignOrDefault<Options>>>

// Default nested api identifier overload
async function updateCampaign<Options extends UpdateCampaignOptions>(
  id: string,
      variables: {
          campaign?: UpdateCampaignInput,
        },
  
  options?: LimitToKnownKeys<Options, UpdateCampaignOptions>
): Promise<SelectedCampaignOrDefault<Options> extends void ? void : GadgetRecord<SelectedCampaignOrDefault<Options>>>;

// Function implementation
async function updateCampaign<Options extends UpdateCampaignOptions>(
  this: CampaignManager,
  id: string,
      variables: {
          campaign?: UpdateCampaignInput,
        }
    
      | updateCampaignVariables
    ,
  
  options?: LimitToKnownKeys<Options, UpdateCampaignOptions>
): Promise<SelectedCampaignOrDefault<Options> extends void ? void : GadgetRecord<SelectedCampaignOrDefault<Options>>>
 {
    let newVariables: {
      campaign?: UpdateCampaignInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "campaign";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: UpdateCampaignInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof UpdateCampaignInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedCampaignOrDefault<Options>>(
      this,
      "updateCampaign",
      DefaultCampaignSelection,
      "campaign",
      "campaign",
      false,
      {
        id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
        "campaign": {
          value: newVariables.campaign,
          required: false,
          type: "UpdateCampaignInput",
        },
      },
      options,
      null
    ));
  }
  
    

/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Default nested api identifier overload
async function deleteCampaign<Options extends DeleteCampaignOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteCampaignOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedCampaignOrDefault<Options>>>;

// Function implementation
async function deleteCampaign<Options extends DeleteCampaignOptions>(
  this: CampaignManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteCampaignOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedCampaignOrDefault<Options>>>
 {

    return (await actionRunner<void>(
      this,
      "deleteCampaign",
      null,
      "campaign",
      "campaign",
      false,
      {
        id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
      },
      options,
      null
    ));
  }
  

/** All the actions available at the collection level and record level for "campaign" */
export class CampaignManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one campaign by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneCampaignOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneCampaignOptions>):
    Promise<
      GadgetRecord<
        SelectedCampaignOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "campaign";
  modelApiIdentifier: "campaign";
  defaultSelection: typeof DefaultCampaignSelection;
  selectionType: AvailableCampaignSelection;
  optionsType: FindOneCampaignOptions;
  schemaType: Query["campaign"];
} = Object.assign(
  async <Options extends FindOneCampaignOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneCampaignOptions>) => {
    return await findOneRunner<SelectedCampaignOrDefault<Options>>(
      this,
      "campaign",
      id,
      DefaultCampaignSelection,
      "campaign",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "campaign",
    modelApiIdentifier: "campaign",
    defaultSelection: DefaultCampaignSelection,
    selectionType: {} as AvailableCampaignSelection,
    optionsType: {} as FindOneCampaignOptions,
    schemaType: null as Query["campaign"],
  } as const
)

  
    /**
 * Finds one campaign by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneCampaignOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneCampaignOptions>):
    Promise<
      GadgetRecord<
        SelectedCampaignOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "campaign";
  modelApiIdentifier: "campaign";
  defaultSelection: typeof DefaultCampaignSelection;
  selectionType: AvailableCampaignSelection;
  optionsType: MaybeFindOneCampaignOptions;
  schemaType: Query["campaign"];
} = Object.assign(
  async <Options extends MaybeFindOneCampaignOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneCampaignOptions>) => {
    const record = await findOneRunner<SelectedCampaignOrDefault<Options>>(
      this,
      "campaign",
      id,
      DefaultCampaignSelection,
      "campaign",
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "campaign",
    modelApiIdentifier: "campaign",
    defaultSelection: DefaultCampaignSelection,
    selectionType: {} as AvailableCampaignSelection,
    optionsType: {} as MaybeFindOneCampaignOptions,
    schemaType: null as Query["campaign"],
  } as const
)

  
    /**
 * Finds many campaign. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyCampaignsOptions>(options?: LimitToKnownKeys<Options, FindManyCampaignsOptions>):
    Promise<
      GadgetRecordList<
        SelectedCampaignOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "campaigns";
  modelApiIdentifier: "campaign";
  defaultSelection: typeof DefaultCampaignSelection;
  selectionType: AvailableCampaignSelection;
  optionsType: FindManyCampaignsOptions;
  schemaType: Query["campaign"];
} = Object.assign(
  async <Options extends FindManyCampaignsOptions>(options?: LimitToKnownKeys<Options, FindManyCampaignsOptions>):
    Promise<
      GadgetRecordList<
        SelectedCampaignOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedCampaignOrDefault<Options>>(
      this,
      "campaigns",
      DefaultCampaignSelection,
      "campaign",
      options
    );
  },
  {
    type: "findMany",
    operationName: "campaigns",
    modelApiIdentifier: "campaign",
    defaultSelection: DefaultCampaignSelection,
    selectionType: {} as AvailableCampaignSelection,
    optionsType: {} as FindManyCampaignsOptions,
    schemaType: null as Query["campaign"],
  } as const
);
  
    /**
 * Finds the first matching campaign. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstCampaignOptions>(options?: LimitToKnownKeys<Options, FindFirstCampaignOptions>):
    Promise<
      GadgetRecord<
        SelectedCampaignOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "campaigns";
  modelApiIdentifier: "campaign";
  defaultSelection: typeof DefaultCampaignSelection;
  selectionType: AvailableCampaignSelection;
  optionsType: FindFirstCampaignOptions;
  schemaType: Query["campaign"];
} = Object.assign(
  async <Options extends FindFirstCampaignOptions>(options?: LimitToKnownKeys<Options, FindFirstCampaignOptions>):
    Promise<
      GadgetRecord<
        SelectedCampaignOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedCampaignOrDefault<Options>>(
      this,
      "campaigns",
      DefaultCampaignSelection,
      "campaign",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "campaigns",
    modelApiIdentifier: "campaign",
    defaultSelection: DefaultCampaignSelection,
    selectionType: {} as AvailableCampaignSelection,
    optionsType: {} as FindFirstCampaignOptions,
    schemaType: null as Query["campaign"],
  } as const
);
  
    /**
 * Finds the first matching campaign. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstCampaignOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstCampaignOptions>):
    Promise<
      GadgetRecord<
        SelectedCampaignOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "campaigns";
  modelApiIdentifier: "campaign";
  defaultSelection: typeof DefaultCampaignSelection;
  selectionType: AvailableCampaignSelection;
  optionsType: MaybeFindFirstCampaignOptions;
  schemaType: Query["campaign"];
} = Object.assign(
  async <Options extends MaybeFindFirstCampaignOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstCampaignOptions>):
    Promise<
      GadgetRecord<
        SelectedCampaignOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedCampaignOrDefault<Options>>(
      this,
      "campaigns",
      DefaultCampaignSelection,
      "campaign",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "campaigns",
    modelApiIdentifier: "campaign",
    defaultSelection: DefaultCampaignSelection,
    selectionType: {} as AvailableCampaignSelection,
    optionsType: {} as MaybeFindFirstCampaignOptions,
    schemaType: null as Query["campaign"],
  } as const
);
  
    /**
  * Finds one campaign by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneCampaignOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneCampaignOptions>):
    Promise<
      GadgetRecord<
        SelectedCampaignOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "campaigns";
  modelApiIdentifier: "campaign";
  defaultSelection: typeof DefaultCampaignSelection;
  selectionType: AvailableCampaignSelection;
  optionsType: FindOneCampaignOptions;
  schemaType: Query["campaign"];
} = Object.assign(
  async <Options extends FindOneCampaignOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneCampaignOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedCampaignOrDefault<Options>
      > & SelectedCampaignOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedCampaignOrDefault<Options>>(
      this,
      "campaigns",
      "id",
      value,
      DefaultCampaignSelection,
      "campaign",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "campaigns",
    modelApiIdentifier: "campaign",
    defaultSelection: DefaultCampaignSelection,
    selectionType: {} as AvailableCampaignSelection,
    optionsType: {} as FindOneCampaignOptions,
    schemaType: null as Query["campaign"],
  } as const
)
  
    create = Object.assign(createCampaign,
  {
    type: "action",
    operationName: "createCampaign",
    namespace: null,
    modelApiIdentifier: "campaign",
    modelSelectionField: "campaign",
    isBulk: false,
    defaultSelection: DefaultCampaignSelection,
    selectionType: {} as AvailableCampaignSelection,
    optionsType: {} as CreateCampaignOptions,
    schemaType: null as Query["campaign"],

    variablesType: undefined as {
      
              campaign?: CreateCampaignInput,
          }  | createCampaignVariables
    
    | undefined,

    variables: {
      "campaign": {
        required: false,
        type: "CreateCampaignInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
    update = Object.assign(updateCampaign,
  {
    type: "action",
    operationName: "updateCampaign",
    namespace: null,
    modelApiIdentifier: "campaign",
    modelSelectionField: "campaign",
    isBulk: false,
    defaultSelection: DefaultCampaignSelection,
    selectionType: {} as AvailableCampaignSelection,
    optionsType: {} as UpdateCampaignOptions,
    schemaType: null as Query["campaign"],

    variablesType: undefined as {
      id: string,
              campaign?: UpdateCampaignInput,
          }  | updateCampaignVariables
    
    & { id: string; }
    
    | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "campaign": {
        required: false,
        type: "UpdateCampaignInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
    delete = Object.assign(deleteCampaign,
  {
    type: "action",
    operationName: "deleteCampaign",
    namespace: null,
    modelApiIdentifier: "campaign",
    modelSelectionField: "campaign",
    isBulk: false,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteCampaignOptions,
    schemaType: null,

    variablesType: undefined as {
      id: string,
          } | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: false,
    isCreateOrUpdateAction: false,
    paramOnlyVariables: [],
  } as const
)
  
    /**
  * Executes the bulkDelete action on all records specified by `ids`. Deletes the records on the server.
  */
bulkDelete: {
  <Options extends DeleteCampaignOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteCampaignOptions>
  ): Promise<void>;
  type: "action";
  operationName: "bulkDeleteCampaigns";
  namespace: null;
  modelApiIdentifier: "campaign";
  modelSelectionField: "campaigns";
  isBulk: true;
  defaultSelection: null;
  selectionType: Record<string, never>;
  optionsType: DeleteCampaignOptions;
  schemaType: null;
  variablesType: {
    ids: string[];
  } | undefined;
  variables: {
    ids: {
      required: true;
      type: "[GadgetID!]";
    };
  };
} = Object.assign(
  async <Options extends DeleteCampaignOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteCampaignOptions>
  ) => {
    return (await actionRunner<void>(
      this,
      "bulkDeleteCampaigns",
      null,
      "campaign",
      "campaigns",
      true,
      {
        ids: {
          value: ids,
          required: true,
          type: "[GadgetID!]",
        },
      },
      options,
      null
    ));
  },
  {
    type: "action",
    operationName: "bulkDeleteCampaigns",
    namespace: null,
    modelApiIdentifier: "campaign",
    modelSelectionField: "campaigns",
    isBulk: true,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteCampaignOptions,
    schemaType: null,

    variablesType: undefined as {
      ids: string[]
    } | undefined,

    variables: {
      ids: {
        required: true,
        type: "[GadgetID!]",
      },
    },
  } as const
)
  
}
