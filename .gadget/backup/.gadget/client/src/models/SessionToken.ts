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
      SessionToken,
      SessionTokenSort,
      SessionTokenFilter,
      AvailableSessionTokenSelection,
      BulkDeleteSessionTokensResult,
      UpdateSessionTokenInput,
      CreateSessionTokenInput,
  
} from "../types.js";

export const DefaultSessionTokenSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "token": true
} as const;

/** 
* Produce a type that holds only the selected fields (and nested fields) of "sessionToken". The present fields in the result type of this are dynamic based on the options to each call that uses it. 
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above. 
*/
export type SelectedSessionTokenOrDefault<Options extends Selectable<AvailableSessionTokenSelection>> = DeepFilterNever<
  Select<
    SessionToken, 
    DefaultSelection<
      AvailableSessionTokenSelection,
      Options,
      typeof DefaultSessionTokenSelection
    >
  >>;

/** Options that can be passed to the `SessionTokenManager#findOne` method */
export interface FindOneSessionTokenOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableSessionTokenSelection;
};


/** Options that can be passed to the `SessionTokenManager#maybeFindOne` method */
export interface MaybeFindOneSessionTokenOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableSessionTokenSelection;
};


/** Options that can be passed to the `SessionTokenManager#findMany` method */
export interface FindManySessionTokensOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableSessionTokenSelection;
  /** Return records sorted by these sorts */
  sort?: SessionTokenSort | SessionTokenSort[] | null;
  /** Only return records matching these filters. */
  filter?: SessionTokenFilter | SessionTokenFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};


/** Options that can be passed to the `SessionTokenManager#findFirst` method */
export interface FindFirstSessionTokenOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableSessionTokenSelection;
  /** Return records sorted by these sorts */
  sort?: SessionTokenSort | SessionTokenSort[] | null;
  /** Only return records matching these filters. */
  filter?: SessionTokenFilter | SessionTokenFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


/** Options that can be passed to the `SessionTokenManager#maybeFindFirst` method */
export interface MaybeFindFirstSessionTokenOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableSessionTokenSelection;
  /** Return records sorted by these sorts */
  sort?: SessionTokenSort | SessionTokenSort[] | null;
  /** Only return records matching these filters. */
  filter?: SessionTokenFilter | SessionTokenFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};



export interface DeleteSessionTokenOptions {
};



export interface UpdateSessionTokenOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableSessionTokenSelection;
};



export interface CreateSessionTokenOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableSessionTokenSelection;
};




    

/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Default nested api identifier overload
async function deleteSessionToken<Options extends DeleteSessionTokenOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteSessionTokenOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedSessionTokenOrDefault<Options>>>;

// Function implementation
async function deleteSessionToken<Options extends DeleteSessionTokenOptions>(
  this: SessionTokenManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteSessionTokenOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedSessionTokenOrDefault<Options>>>
 {

    return (await actionRunner<void>(
      this,
      "deleteSessionToken",
      null,
      "sessionToken",
      "sessionToken",
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
  
    
  type updateSessionTokenVariables =
      UpdateSessionTokenInput



/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateSessionToken<Options extends UpdateSessionTokenOptions>(
  id: string,
    variables: updateSessionTokenVariables,

  options?: LimitToKnownKeys<Options, UpdateSessionTokenOptions>
): Promise<SelectedSessionTokenOrDefault<Options> extends void ? void : GadgetRecord<SelectedSessionTokenOrDefault<Options>>>

// Default nested api identifier overload
async function updateSessionToken<Options extends UpdateSessionTokenOptions>(
  id: string,
      variables: {
          sessionToken?: UpdateSessionTokenInput,
        },
  
  options?: LimitToKnownKeys<Options, UpdateSessionTokenOptions>
): Promise<SelectedSessionTokenOrDefault<Options> extends void ? void : GadgetRecord<SelectedSessionTokenOrDefault<Options>>>;

// Function implementation
async function updateSessionToken<Options extends UpdateSessionTokenOptions>(
  this: SessionTokenManager,
  id: string,
      variables: {
          sessionToken?: UpdateSessionTokenInput,
        }
    
      | updateSessionTokenVariables
    ,
  
  options?: LimitToKnownKeys<Options, UpdateSessionTokenOptions>
): Promise<SelectedSessionTokenOrDefault<Options> extends void ? void : GadgetRecord<SelectedSessionTokenOrDefault<Options>>>
 {
    let newVariables: {
      sessionToken?: UpdateSessionTokenInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "sessionToken";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: UpdateSessionTokenInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof UpdateSessionTokenInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedSessionTokenOrDefault<Options>>(
      this,
      "updateSessionToken",
      DefaultSessionTokenSelection,
      "sessionToken",
      "sessionToken",
      false,
      {
        id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
        "sessionToken": {
          value: newVariables.sessionToken,
          required: false,
          type: "UpdateSessionTokenInput",
        },
      },
      options,
      null
    ));
  }
  
    
  type createSessionTokenVariables =
      CreateSessionTokenInput



/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createSessionToken<Options extends CreateSessionTokenOptions>(
  
    variables: createSessionTokenVariables,

  options?: LimitToKnownKeys<Options, CreateSessionTokenOptions>
): Promise<SelectedSessionTokenOrDefault<Options> extends void ? void : GadgetRecord<SelectedSessionTokenOrDefault<Options>>>

// Default nested api identifier overload
async function createSessionToken<Options extends CreateSessionTokenOptions>(
  
      variables: {
          sessionToken?: CreateSessionTokenInput,
        },
  
  options?: LimitToKnownKeys<Options, CreateSessionTokenOptions>
): Promise<SelectedSessionTokenOrDefault<Options> extends void ? void : GadgetRecord<SelectedSessionTokenOrDefault<Options>>>;

// Function implementation
async function createSessionToken<Options extends CreateSessionTokenOptions>(
  this: SessionTokenManager,
  
      variables: {
          sessionToken?: CreateSessionTokenInput,
        }
    
      | createSessionTokenVariables
    ,
  
  options?: LimitToKnownKeys<Options, CreateSessionTokenOptions>
): Promise<SelectedSessionTokenOrDefault<Options> extends void ? void : GadgetRecord<SelectedSessionTokenOrDefault<Options>>>
 {
    let newVariables: {
      sessionToken?: CreateSessionTokenInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "sessionToken";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: CreateSessionTokenInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof CreateSessionTokenInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedSessionTokenOrDefault<Options>>(
      this,
      "createSessionToken",
      DefaultSessionTokenSelection,
      "sessionToken",
      "sessionToken",
      false,
      {
        "sessionToken": {
          value: newVariables.sessionToken,
          required: false,
          type: "CreateSessionTokenInput",
        },
      },
      options,
      null
    ));
  }
  

/** All the actions available at the collection level and record level for "sessionToken" */
export class SessionTokenManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one sessionToken by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneSessionTokenOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneSessionTokenOptions>):
    Promise<
      GadgetRecord<
        SelectedSessionTokenOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "sessionToken";
  modelApiIdentifier: "sessionToken";
  defaultSelection: typeof DefaultSessionTokenSelection;
  selectionType: AvailableSessionTokenSelection;
  optionsType: FindOneSessionTokenOptions;
  schemaType: Query["sessionToken"];
} = Object.assign(
  async <Options extends FindOneSessionTokenOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneSessionTokenOptions>) => {
    return await findOneRunner<SelectedSessionTokenOrDefault<Options>>(
      this,
      "sessionToken",
      id,
      DefaultSessionTokenSelection,
      "sessionToken",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "sessionToken",
    modelApiIdentifier: "sessionToken",
    defaultSelection: DefaultSessionTokenSelection,
    selectionType: {} as AvailableSessionTokenSelection,
    optionsType: {} as FindOneSessionTokenOptions,
    schemaType: null as Query["sessionToken"],
  } as const
)

  
    /**
 * Finds one sessionToken by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneSessionTokenOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneSessionTokenOptions>):
    Promise<
      GadgetRecord<
        SelectedSessionTokenOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "sessionToken";
  modelApiIdentifier: "sessionToken";
  defaultSelection: typeof DefaultSessionTokenSelection;
  selectionType: AvailableSessionTokenSelection;
  optionsType: MaybeFindOneSessionTokenOptions;
  schemaType: Query["sessionToken"];
} = Object.assign(
  async <Options extends MaybeFindOneSessionTokenOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneSessionTokenOptions>) => {
    const record = await findOneRunner<SelectedSessionTokenOrDefault<Options>>(
      this,
      "sessionToken",
      id,
      DefaultSessionTokenSelection,
      "sessionToken",
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "sessionToken",
    modelApiIdentifier: "sessionToken",
    defaultSelection: DefaultSessionTokenSelection,
    selectionType: {} as AvailableSessionTokenSelection,
    optionsType: {} as MaybeFindOneSessionTokenOptions,
    schemaType: null as Query["sessionToken"],
  } as const
)

  
    /**
 * Finds many sessionToken. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManySessionTokensOptions>(options?: LimitToKnownKeys<Options, FindManySessionTokensOptions>):
    Promise<
      GadgetRecordList<
        SelectedSessionTokenOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "sessionTokens";
  modelApiIdentifier: "sessionToken";
  defaultSelection: typeof DefaultSessionTokenSelection;
  selectionType: AvailableSessionTokenSelection;
  optionsType: FindManySessionTokensOptions;
  schemaType: Query["sessionToken"];
} = Object.assign(
  async <Options extends FindManySessionTokensOptions>(options?: LimitToKnownKeys<Options, FindManySessionTokensOptions>):
    Promise<
      GadgetRecordList<
        SelectedSessionTokenOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedSessionTokenOrDefault<Options>>(
      this,
      "sessionTokens",
      DefaultSessionTokenSelection,
      "sessionToken",
      options
    );
  },
  {
    type: "findMany",
    operationName: "sessionTokens",
    modelApiIdentifier: "sessionToken",
    defaultSelection: DefaultSessionTokenSelection,
    selectionType: {} as AvailableSessionTokenSelection,
    optionsType: {} as FindManySessionTokensOptions,
    schemaType: null as Query["sessionToken"],
  } as const
);
  
    /**
 * Finds the first matching sessionToken. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstSessionTokenOptions>(options?: LimitToKnownKeys<Options, FindFirstSessionTokenOptions>):
    Promise<
      GadgetRecord<
        SelectedSessionTokenOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "sessionTokens";
  modelApiIdentifier: "sessionToken";
  defaultSelection: typeof DefaultSessionTokenSelection;
  selectionType: AvailableSessionTokenSelection;
  optionsType: FindFirstSessionTokenOptions;
  schemaType: Query["sessionToken"];
} = Object.assign(
  async <Options extends FindFirstSessionTokenOptions>(options?: LimitToKnownKeys<Options, FindFirstSessionTokenOptions>):
    Promise<
      GadgetRecord<
        SelectedSessionTokenOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedSessionTokenOrDefault<Options>>(
      this,
      "sessionTokens",
      DefaultSessionTokenSelection,
      "sessionToken",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "sessionTokens",
    modelApiIdentifier: "sessionToken",
    defaultSelection: DefaultSessionTokenSelection,
    selectionType: {} as AvailableSessionTokenSelection,
    optionsType: {} as FindFirstSessionTokenOptions,
    schemaType: null as Query["sessionToken"],
  } as const
);
  
    /**
 * Finds the first matching sessionToken. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstSessionTokenOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstSessionTokenOptions>):
    Promise<
      GadgetRecord<
        SelectedSessionTokenOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "sessionTokens";
  modelApiIdentifier: "sessionToken";
  defaultSelection: typeof DefaultSessionTokenSelection;
  selectionType: AvailableSessionTokenSelection;
  optionsType: MaybeFindFirstSessionTokenOptions;
  schemaType: Query["sessionToken"];
} = Object.assign(
  async <Options extends MaybeFindFirstSessionTokenOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstSessionTokenOptions>):
    Promise<
      GadgetRecord<
        SelectedSessionTokenOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedSessionTokenOrDefault<Options>>(
      this,
      "sessionTokens",
      DefaultSessionTokenSelection,
      "sessionToken",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "sessionTokens",
    modelApiIdentifier: "sessionToken",
    defaultSelection: DefaultSessionTokenSelection,
    selectionType: {} as AvailableSessionTokenSelection,
    optionsType: {} as MaybeFindFirstSessionTokenOptions,
    schemaType: null as Query["sessionToken"],
  } as const
);
  
    /**
  * Finds one sessionToken by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneSessionTokenOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneSessionTokenOptions>):
    Promise<
      GadgetRecord<
        SelectedSessionTokenOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "sessionTokens";
  modelApiIdentifier: "sessionToken";
  defaultSelection: typeof DefaultSessionTokenSelection;
  selectionType: AvailableSessionTokenSelection;
  optionsType: FindOneSessionTokenOptions;
  schemaType: Query["sessionToken"];
} = Object.assign(
  async <Options extends FindOneSessionTokenOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneSessionTokenOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedSessionTokenOrDefault<Options>
      > & SelectedSessionTokenOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedSessionTokenOrDefault<Options>>(
      this,
      "sessionTokens",
      "id",
      value,
      DefaultSessionTokenSelection,
      "sessionToken",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "sessionTokens",
    modelApiIdentifier: "sessionToken",
    defaultSelection: DefaultSessionTokenSelection,
    selectionType: {} as AvailableSessionTokenSelection,
    optionsType: {} as FindOneSessionTokenOptions,
    schemaType: null as Query["sessionToken"],
  } as const
)
  
    delete = Object.assign(deleteSessionToken,
  {
    type: "action",
    operationName: "deleteSessionToken",
    namespace: null,
    modelApiIdentifier: "sessionToken",
    modelSelectionField: "sessionToken",
    isBulk: false,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteSessionTokenOptions,
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
  <Options extends DeleteSessionTokenOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteSessionTokenOptions>
  ): Promise<void>;
  type: "action";
  operationName: "bulkDeleteSessionTokens";
  namespace: null;
  modelApiIdentifier: "sessionToken";
  modelSelectionField: "sessionTokens";
  isBulk: true;
  defaultSelection: null;
  selectionType: Record<string, never>;
  optionsType: DeleteSessionTokenOptions;
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
  async <Options extends DeleteSessionTokenOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteSessionTokenOptions>
  ) => {
    return (await actionRunner<void>(
      this,
      "bulkDeleteSessionTokens",
      null,
      "sessionToken",
      "sessionTokens",
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
    operationName: "bulkDeleteSessionTokens",
    namespace: null,
    modelApiIdentifier: "sessionToken",
    modelSelectionField: "sessionTokens",
    isBulk: true,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteSessionTokenOptions,
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
  
    update = Object.assign(updateSessionToken,
  {
    type: "action",
    operationName: "updateSessionToken",
    namespace: null,
    modelApiIdentifier: "sessionToken",
    modelSelectionField: "sessionToken",
    isBulk: false,
    defaultSelection: DefaultSessionTokenSelection,
    selectionType: {} as AvailableSessionTokenSelection,
    optionsType: {} as UpdateSessionTokenOptions,
    schemaType: null as Query["sessionToken"],

    variablesType: undefined as {
      id: string,
              sessionToken?: UpdateSessionTokenInput,
          }  | updateSessionTokenVariables
    
    & { id: string; }
    
    | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "sessionToken": {
        required: false,
        type: "UpdateSessionTokenInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
    create = Object.assign(createSessionToken,
  {
    type: "action",
    operationName: "createSessionToken",
    namespace: null,
    modelApiIdentifier: "sessionToken",
    modelSelectionField: "sessionToken",
    isBulk: false,
    defaultSelection: DefaultSessionTokenSelection,
    selectionType: {} as AvailableSessionTokenSelection,
    optionsType: {} as CreateSessionTokenOptions,
    schemaType: null as Query["sessionToken"],

    variablesType: undefined as {
      
              sessionToken?: CreateSessionTokenInput,
          }  | createSessionTokenVariables
    
    | undefined,

    variables: {
      "sessionToken": {
        required: false,
        type: "CreateSessionTokenInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
}
