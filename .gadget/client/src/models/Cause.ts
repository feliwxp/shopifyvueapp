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
      Cause,
      CauseSort,
      CauseFilter,
      AvailableCauseSelection,
      UpdateCauseInput,
      CreateCauseInput,
      BulkDeleteCausesResult,
  
} from "../types.js";

export const DefaultCauseSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "category": true
} as const;

/** 
* Produce a type that holds only the selected fields (and nested fields) of "cause". The present fields in the result type of this are dynamic based on the options to each call that uses it. 
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above. 
*/
export type SelectedCauseOrDefault<Options extends Selectable<AvailableCauseSelection>> = DeepFilterNever<
  Select<
    Cause, 
    DefaultSelection<
      AvailableCauseSelection,
      Options,
      typeof DefaultCauseSelection
    >
  >>;

/** Options that can be passed to the `CauseManager#findOne` method */
export interface FindOneCauseOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCauseSelection;
};


/** Options that can be passed to the `CauseManager#maybeFindOne` method */
export interface MaybeFindOneCauseOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCauseSelection;
};


/** Options that can be passed to the `CauseManager#findMany` method */
export interface FindManyCausesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCauseSelection;
  /** Return records sorted by these sorts */
  sort?: CauseSort | CauseSort[] | null;
  /** Only return records matching these filters. */
  filter?: CauseFilter | CauseFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};


/** Options that can be passed to the `CauseManager#findFirst` method */
export interface FindFirstCauseOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCauseSelection;
  /** Return records sorted by these sorts */
  sort?: CauseSort | CauseSort[] | null;
  /** Only return records matching these filters. */
  filter?: CauseFilter | CauseFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


/** Options that can be passed to the `CauseManager#maybeFindFirst` method */
export interface MaybeFindFirstCauseOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCauseSelection;
  /** Return records sorted by these sorts */
  sort?: CauseSort | CauseSort[] | null;
  /** Only return records matching these filters. */
  filter?: CauseFilter | CauseFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};



export interface UpdateCauseOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCauseSelection;
};



export interface CreateCauseOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCauseSelection;
};



export interface DeleteCauseOptions {
};




    
  type updateCauseVariables =
      UpdateCauseInput



/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateCause<Options extends UpdateCauseOptions>(
  id: string,
    variables: updateCauseVariables,

  options?: LimitToKnownKeys<Options, UpdateCauseOptions>
): Promise<SelectedCauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCauseOrDefault<Options>>>

// Default nested api identifier overload
async function updateCause<Options extends UpdateCauseOptions>(
  id: string,
      variables: {
          cause?: UpdateCauseInput,
        },
  
  options?: LimitToKnownKeys<Options, UpdateCauseOptions>
): Promise<SelectedCauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCauseOrDefault<Options>>>;

// Function implementation
async function updateCause<Options extends UpdateCauseOptions>(
  this: CauseManager,
  id: string,
      variables: {
          cause?: UpdateCauseInput,
        }
    
      | updateCauseVariables
    ,
  
  options?: LimitToKnownKeys<Options, UpdateCauseOptions>
): Promise<SelectedCauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCauseOrDefault<Options>>>
 {
    let newVariables: {
      cause?: UpdateCauseInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "cause";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: UpdateCauseInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof UpdateCauseInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedCauseOrDefault<Options>>(
      this,
      "updateCause",
      DefaultCauseSelection,
      "cause",
      "cause",
      false,
      {
        id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
        "cause": {
          value: newVariables.cause,
          required: false,
          type: "UpdateCauseInput",
        },
      },
      options,
      null
    ));
  }
  
    
  type createCauseVariables =
      CreateCauseInput



/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createCause<Options extends CreateCauseOptions>(
  
    variables: createCauseVariables,

  options?: LimitToKnownKeys<Options, CreateCauseOptions>
): Promise<SelectedCauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCauseOrDefault<Options>>>

// Default nested api identifier overload
async function createCause<Options extends CreateCauseOptions>(
  
      variables: {
          cause?: CreateCauseInput,
        },
  
  options?: LimitToKnownKeys<Options, CreateCauseOptions>
): Promise<SelectedCauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCauseOrDefault<Options>>>;

// Function implementation
async function createCause<Options extends CreateCauseOptions>(
  this: CauseManager,
  
      variables: {
          cause?: CreateCauseInput,
        }
    
      | createCauseVariables
    ,
  
  options?: LimitToKnownKeys<Options, CreateCauseOptions>
): Promise<SelectedCauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCauseOrDefault<Options>>>
 {
    let newVariables: {
      cause?: CreateCauseInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "cause";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: CreateCauseInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof CreateCauseInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedCauseOrDefault<Options>>(
      this,
      "createCause",
      DefaultCauseSelection,
      "cause",
      "cause",
      false,
      {
        "cause": {
          value: newVariables.cause,
          required: false,
          type: "CreateCauseInput",
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
async function deleteCause<Options extends DeleteCauseOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteCauseOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedCauseOrDefault<Options>>>;

// Function implementation
async function deleteCause<Options extends DeleteCauseOptions>(
  this: CauseManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteCauseOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedCauseOrDefault<Options>>>
 {

    return (await actionRunner<void>(
      this,
      "deleteCause",
      null,
      "cause",
      "cause",
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
  

/** All the actions available at the collection level and record level for "cause" */
export class CauseManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one cause by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneCauseOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneCauseOptions>):
    Promise<
      GadgetRecord<
        SelectedCauseOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "cause";
  modelApiIdentifier: "cause";
  defaultSelection: typeof DefaultCauseSelection;
  selectionType: AvailableCauseSelection;
  optionsType: FindOneCauseOptions;
  schemaType: Query["cause"];
} = Object.assign(
  async <Options extends FindOneCauseOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneCauseOptions>) => {
    return await findOneRunner<SelectedCauseOrDefault<Options>>(
      this,
      "cause",
      id,
      DefaultCauseSelection,
      "cause",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "cause",
    modelApiIdentifier: "cause",
    defaultSelection: DefaultCauseSelection,
    selectionType: {} as AvailableCauseSelection,
    optionsType: {} as FindOneCauseOptions,
    schemaType: null as Query["cause"],
  } as const
)

  
    /**
 * Finds one cause by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneCauseOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneCauseOptions>):
    Promise<
      GadgetRecord<
        SelectedCauseOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "cause";
  modelApiIdentifier: "cause";
  defaultSelection: typeof DefaultCauseSelection;
  selectionType: AvailableCauseSelection;
  optionsType: MaybeFindOneCauseOptions;
  schemaType: Query["cause"];
} = Object.assign(
  async <Options extends MaybeFindOneCauseOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneCauseOptions>) => {
    const record = await findOneRunner<SelectedCauseOrDefault<Options>>(
      this,
      "cause",
      id,
      DefaultCauseSelection,
      "cause",
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "cause",
    modelApiIdentifier: "cause",
    defaultSelection: DefaultCauseSelection,
    selectionType: {} as AvailableCauseSelection,
    optionsType: {} as MaybeFindOneCauseOptions,
    schemaType: null as Query["cause"],
  } as const
)

  
    /**
 * Finds many cause. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyCausesOptions>(options?: LimitToKnownKeys<Options, FindManyCausesOptions>):
    Promise<
      GadgetRecordList<
        SelectedCauseOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "causes";
  modelApiIdentifier: "cause";
  defaultSelection: typeof DefaultCauseSelection;
  selectionType: AvailableCauseSelection;
  optionsType: FindManyCausesOptions;
  schemaType: Query["cause"];
} = Object.assign(
  async <Options extends FindManyCausesOptions>(options?: LimitToKnownKeys<Options, FindManyCausesOptions>):
    Promise<
      GadgetRecordList<
        SelectedCauseOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedCauseOrDefault<Options>>(
      this,
      "causes",
      DefaultCauseSelection,
      "cause",
      options
    );
  },
  {
    type: "findMany",
    operationName: "causes",
    modelApiIdentifier: "cause",
    defaultSelection: DefaultCauseSelection,
    selectionType: {} as AvailableCauseSelection,
    optionsType: {} as FindManyCausesOptions,
    schemaType: null as Query["cause"],
  } as const
);
  
    /**
 * Finds the first matching cause. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstCauseOptions>(options?: LimitToKnownKeys<Options, FindFirstCauseOptions>):
    Promise<
      GadgetRecord<
        SelectedCauseOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "causes";
  modelApiIdentifier: "cause";
  defaultSelection: typeof DefaultCauseSelection;
  selectionType: AvailableCauseSelection;
  optionsType: FindFirstCauseOptions;
  schemaType: Query["cause"];
} = Object.assign(
  async <Options extends FindFirstCauseOptions>(options?: LimitToKnownKeys<Options, FindFirstCauseOptions>):
    Promise<
      GadgetRecord<
        SelectedCauseOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedCauseOrDefault<Options>>(
      this,
      "causes",
      DefaultCauseSelection,
      "cause",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "causes",
    modelApiIdentifier: "cause",
    defaultSelection: DefaultCauseSelection,
    selectionType: {} as AvailableCauseSelection,
    optionsType: {} as FindFirstCauseOptions,
    schemaType: null as Query["cause"],
  } as const
);
  
    /**
 * Finds the first matching cause. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstCauseOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstCauseOptions>):
    Promise<
      GadgetRecord<
        SelectedCauseOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "causes";
  modelApiIdentifier: "cause";
  defaultSelection: typeof DefaultCauseSelection;
  selectionType: AvailableCauseSelection;
  optionsType: MaybeFindFirstCauseOptions;
  schemaType: Query["cause"];
} = Object.assign(
  async <Options extends MaybeFindFirstCauseOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstCauseOptions>):
    Promise<
      GadgetRecord<
        SelectedCauseOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedCauseOrDefault<Options>>(
      this,
      "causes",
      DefaultCauseSelection,
      "cause",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "causes",
    modelApiIdentifier: "cause",
    defaultSelection: DefaultCauseSelection,
    selectionType: {} as AvailableCauseSelection,
    optionsType: {} as MaybeFindFirstCauseOptions,
    schemaType: null as Query["cause"],
  } as const
);
  
    /**
  * Finds one cause by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneCauseOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneCauseOptions>):
    Promise<
      GadgetRecord<
        SelectedCauseOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "causes";
  modelApiIdentifier: "cause";
  defaultSelection: typeof DefaultCauseSelection;
  selectionType: AvailableCauseSelection;
  optionsType: FindOneCauseOptions;
  schemaType: Query["cause"];
} = Object.assign(
  async <Options extends FindOneCauseOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneCauseOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedCauseOrDefault<Options>
      > & SelectedCauseOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedCauseOrDefault<Options>>(
      this,
      "causes",
      "id",
      value,
      DefaultCauseSelection,
      "cause",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "causes",
    modelApiIdentifier: "cause",
    defaultSelection: DefaultCauseSelection,
    selectionType: {} as AvailableCauseSelection,
    optionsType: {} as FindOneCauseOptions,
    schemaType: null as Query["cause"],
  } as const
)
  
    update = Object.assign(updateCause,
  {
    type: "action",
    operationName: "updateCause",
    namespace: null,
    modelApiIdentifier: "cause",
    modelSelectionField: "cause",
    isBulk: false,
    defaultSelection: DefaultCauseSelection,
    selectionType: {} as AvailableCauseSelection,
    optionsType: {} as UpdateCauseOptions,
    schemaType: null as Query["cause"],

    variablesType: undefined as {
      id: string,
              cause?: UpdateCauseInput,
          }  | updateCauseVariables
    
    & { id: string; }
    
    | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "cause": {
        required: false,
        type: "UpdateCauseInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
    create = Object.assign(createCause,
  {
    type: "action",
    operationName: "createCause",
    namespace: null,
    modelApiIdentifier: "cause",
    modelSelectionField: "cause",
    isBulk: false,
    defaultSelection: DefaultCauseSelection,
    selectionType: {} as AvailableCauseSelection,
    optionsType: {} as CreateCauseOptions,
    schemaType: null as Query["cause"],

    variablesType: undefined as {
      
              cause?: CreateCauseInput,
          }  | createCauseVariables
    
    | undefined,

    variables: {
      "cause": {
        required: false,
        type: "CreateCauseInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
    delete = Object.assign(deleteCause,
  {
    type: "action",
    operationName: "deleteCause",
    namespace: null,
    modelApiIdentifier: "cause",
    modelSelectionField: "cause",
    isBulk: false,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteCauseOptions,
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
  <Options extends DeleteCauseOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteCauseOptions>
  ): Promise<void>;
  type: "action";
  operationName: "bulkDeleteCauses";
  namespace: null;
  modelApiIdentifier: "cause";
  modelSelectionField: "causes";
  isBulk: true;
  defaultSelection: null;
  selectionType: Record<string, never>;
  optionsType: DeleteCauseOptions;
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
  async <Options extends DeleteCauseOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteCauseOptions>
  ) => {
    return (await actionRunner<void>(
      this,
      "bulkDeleteCauses",
      null,
      "cause",
      "causes",
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
    operationName: "bulkDeleteCauses",
    namespace: null,
    modelApiIdentifier: "cause",
    modelSelectionField: "causes",
    isBulk: true,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteCauseOptions,
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
