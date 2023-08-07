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
      Charitycause,
      CharitycauseSort,
      CharitycauseFilter,
      AvailableCharitycauseSelection,
      UpdateCharitycauseInput,
      CreateCharitycauseInput,
      BulkDeleteCharitycausesResult,
  
} from "../types.js";

export const DefaultCharitycauseSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true
} as const;

/** 
* Produce a type that holds only the selected fields (and nested fields) of "charitycause". The present fields in the result type of this are dynamic based on the options to each call that uses it. 
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above. 
*/
export type SelectedCharitycauseOrDefault<Options extends Selectable<AvailableCharitycauseSelection>> = DeepFilterNever<
  Select<
    Charitycause, 
    DefaultSelection<
      AvailableCharitycauseSelection,
      Options,
      typeof DefaultCharitycauseSelection
    >
  >>;

/** Options that can be passed to the `CharitycauseManager#findOne` method */
export interface FindOneCharitycauseOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCharitycauseSelection;
};


/** Options that can be passed to the `CharitycauseManager#maybeFindOne` method */
export interface MaybeFindOneCharitycauseOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCharitycauseSelection;
};


/** Options that can be passed to the `CharitycauseManager#findMany` method */
export interface FindManyCharitycausesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCharitycauseSelection;
  /** Return records sorted by these sorts */
  sort?: CharitycauseSort | CharitycauseSort[] | null;
  /** Only return records matching these filters. */
  filter?: CharitycauseFilter | CharitycauseFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};


/** Options that can be passed to the `CharitycauseManager#findFirst` method */
export interface FindFirstCharitycauseOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCharitycauseSelection;
  /** Return records sorted by these sorts */
  sort?: CharitycauseSort | CharitycauseSort[] | null;
  /** Only return records matching these filters. */
  filter?: CharitycauseFilter | CharitycauseFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


/** Options that can be passed to the `CharitycauseManager#maybeFindFirst` method */
export interface MaybeFindFirstCharitycauseOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCharitycauseSelection;
  /** Return records sorted by these sorts */
  sort?: CharitycauseSort | CharitycauseSort[] | null;
  /** Only return records matching these filters. */
  filter?: CharitycauseFilter | CharitycauseFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};



export interface UpdateCharitycauseOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCharitycauseSelection;
};



export interface CreateCharitycauseOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCharitycauseSelection;
};



export interface DeleteCharitycauseOptions {
};




    
  type updateCharitycauseVariables =
      UpdateCharitycauseInput



/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateCharitycause<Options extends UpdateCharitycauseOptions>(
  id: string,
    variables: updateCharitycauseVariables,

  options?: LimitToKnownKeys<Options, UpdateCharitycauseOptions>
): Promise<SelectedCharitycauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharitycauseOrDefault<Options>>>

// Default nested api identifier overload
async function updateCharitycause<Options extends UpdateCharitycauseOptions>(
  id: string,
      variables: {
          charitycause?: UpdateCharitycauseInput,
        },
  
  options?: LimitToKnownKeys<Options, UpdateCharitycauseOptions>
): Promise<SelectedCharitycauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharitycauseOrDefault<Options>>>;

// Function implementation
async function updateCharitycause<Options extends UpdateCharitycauseOptions>(
  this: CharitycauseManager,
  id: string,
      variables: {
          charitycause?: UpdateCharitycauseInput,
        }
    
      | updateCharitycauseVariables
    ,
  
  options?: LimitToKnownKeys<Options, UpdateCharitycauseOptions>
): Promise<SelectedCharitycauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharitycauseOrDefault<Options>>>
 {
    let newVariables: {
      charitycause?: UpdateCharitycauseInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "charitycause";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: UpdateCharitycauseInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof UpdateCharitycauseInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedCharitycauseOrDefault<Options>>(
      this,
      "updateCharitycause",
      DefaultCharitycauseSelection,
      "charitycause",
      "charitycause",
      false,
      {
        id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
        "charitycause": {
          value: newVariables.charitycause,
          required: false,
          type: "UpdateCharitycauseInput",
        },
      },
      options,
      null
    ));
  }
  
    
  type createCharitycauseVariables =
      CreateCharitycauseInput



/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createCharitycause<Options extends CreateCharitycauseOptions>(
  
    variables: createCharitycauseVariables,

  options?: LimitToKnownKeys<Options, CreateCharitycauseOptions>
): Promise<SelectedCharitycauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharitycauseOrDefault<Options>>>

// Default nested api identifier overload
async function createCharitycause<Options extends CreateCharitycauseOptions>(
  
      variables: {
          charitycause?: CreateCharitycauseInput,
        },
  
  options?: LimitToKnownKeys<Options, CreateCharitycauseOptions>
): Promise<SelectedCharitycauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharitycauseOrDefault<Options>>>;

// Function implementation
async function createCharitycause<Options extends CreateCharitycauseOptions>(
  this: CharitycauseManager,
  
      variables: {
          charitycause?: CreateCharitycauseInput,
        }
    
      | createCharitycauseVariables
    ,
  
  options?: LimitToKnownKeys<Options, CreateCharitycauseOptions>
): Promise<SelectedCharitycauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharitycauseOrDefault<Options>>>
 {
    let newVariables: {
      charitycause?: CreateCharitycauseInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "charitycause";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: CreateCharitycauseInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof CreateCharitycauseInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedCharitycauseOrDefault<Options>>(
      this,
      "createCharitycause",
      DefaultCharitycauseSelection,
      "charitycause",
      "charitycause",
      false,
      {
        "charitycause": {
          value: newVariables.charitycause,
          required: false,
          type: "CreateCharitycauseInput",
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
async function deleteCharitycause<Options extends DeleteCharitycauseOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteCharitycauseOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedCharitycauseOrDefault<Options>>>;

// Function implementation
async function deleteCharitycause<Options extends DeleteCharitycauseOptions>(
  this: CharitycauseManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteCharitycauseOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedCharitycauseOrDefault<Options>>>
 {

    return (await actionRunner<void>(
      this,
      "deleteCharitycause",
      null,
      "charitycause",
      "charitycause",
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
  

/** All the actions available at the collection level and record level for "charitycause" */
export class CharitycauseManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one charitycause by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneCharitycauseOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneCharitycauseOptions>):
    Promise<
      GadgetRecord<
        SelectedCharitycauseOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "charitycause";
  modelApiIdentifier: "charitycause";
  defaultSelection: typeof DefaultCharitycauseSelection;
  selectionType: AvailableCharitycauseSelection;
  optionsType: FindOneCharitycauseOptions;
  schemaType: Query["charitycause"];
} = Object.assign(
  async <Options extends FindOneCharitycauseOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneCharitycauseOptions>) => {
    return await findOneRunner<SelectedCharitycauseOrDefault<Options>>(
      this,
      "charitycause",
      id,
      DefaultCharitycauseSelection,
      "charitycause",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "charitycause",
    modelApiIdentifier: "charitycause",
    defaultSelection: DefaultCharitycauseSelection,
    selectionType: {} as AvailableCharitycauseSelection,
    optionsType: {} as FindOneCharitycauseOptions,
    schemaType: null as Query["charitycause"],
  } as const
)

  
    /**
 * Finds one charitycause by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneCharitycauseOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneCharitycauseOptions>):
    Promise<
      GadgetRecord<
        SelectedCharitycauseOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "charitycause";
  modelApiIdentifier: "charitycause";
  defaultSelection: typeof DefaultCharitycauseSelection;
  selectionType: AvailableCharitycauseSelection;
  optionsType: MaybeFindOneCharitycauseOptions;
  schemaType: Query["charitycause"];
} = Object.assign(
  async <Options extends MaybeFindOneCharitycauseOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneCharitycauseOptions>) => {
    const record = await findOneRunner<SelectedCharitycauseOrDefault<Options>>(
      this,
      "charitycause",
      id,
      DefaultCharitycauseSelection,
      "charitycause",
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "charitycause",
    modelApiIdentifier: "charitycause",
    defaultSelection: DefaultCharitycauseSelection,
    selectionType: {} as AvailableCharitycauseSelection,
    optionsType: {} as MaybeFindOneCharitycauseOptions,
    schemaType: null as Query["charitycause"],
  } as const
)

  
    /**
 * Finds many charitycause. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyCharitycausesOptions>(options?: LimitToKnownKeys<Options, FindManyCharitycausesOptions>):
    Promise<
      GadgetRecordList<
        SelectedCharitycauseOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "charitycauses";
  modelApiIdentifier: "charitycause";
  defaultSelection: typeof DefaultCharitycauseSelection;
  selectionType: AvailableCharitycauseSelection;
  optionsType: FindManyCharitycausesOptions;
  schemaType: Query["charitycause"];
} = Object.assign(
  async <Options extends FindManyCharitycausesOptions>(options?: LimitToKnownKeys<Options, FindManyCharitycausesOptions>):
    Promise<
      GadgetRecordList<
        SelectedCharitycauseOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedCharitycauseOrDefault<Options>>(
      this,
      "charitycauses",
      DefaultCharitycauseSelection,
      "charitycause",
      options
    );
  },
  {
    type: "findMany",
    operationName: "charitycauses",
    modelApiIdentifier: "charitycause",
    defaultSelection: DefaultCharitycauseSelection,
    selectionType: {} as AvailableCharitycauseSelection,
    optionsType: {} as FindManyCharitycausesOptions,
    schemaType: null as Query["charitycause"],
  } as const
);
  
    /**
 * Finds the first matching charitycause. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstCharitycauseOptions>(options?: LimitToKnownKeys<Options, FindFirstCharitycauseOptions>):
    Promise<
      GadgetRecord<
        SelectedCharitycauseOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "charitycauses";
  modelApiIdentifier: "charitycause";
  defaultSelection: typeof DefaultCharitycauseSelection;
  selectionType: AvailableCharitycauseSelection;
  optionsType: FindFirstCharitycauseOptions;
  schemaType: Query["charitycause"];
} = Object.assign(
  async <Options extends FindFirstCharitycauseOptions>(options?: LimitToKnownKeys<Options, FindFirstCharitycauseOptions>):
    Promise<
      GadgetRecord<
        SelectedCharitycauseOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedCharitycauseOrDefault<Options>>(
      this,
      "charitycauses",
      DefaultCharitycauseSelection,
      "charitycause",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "charitycauses",
    modelApiIdentifier: "charitycause",
    defaultSelection: DefaultCharitycauseSelection,
    selectionType: {} as AvailableCharitycauseSelection,
    optionsType: {} as FindFirstCharitycauseOptions,
    schemaType: null as Query["charitycause"],
  } as const
);
  
    /**
 * Finds the first matching charitycause. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstCharitycauseOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstCharitycauseOptions>):
    Promise<
      GadgetRecord<
        SelectedCharitycauseOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "charitycauses";
  modelApiIdentifier: "charitycause";
  defaultSelection: typeof DefaultCharitycauseSelection;
  selectionType: AvailableCharitycauseSelection;
  optionsType: MaybeFindFirstCharitycauseOptions;
  schemaType: Query["charitycause"];
} = Object.assign(
  async <Options extends MaybeFindFirstCharitycauseOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstCharitycauseOptions>):
    Promise<
      GadgetRecord<
        SelectedCharitycauseOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedCharitycauseOrDefault<Options>>(
      this,
      "charitycauses",
      DefaultCharitycauseSelection,
      "charitycause",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "charitycauses",
    modelApiIdentifier: "charitycause",
    defaultSelection: DefaultCharitycauseSelection,
    selectionType: {} as AvailableCharitycauseSelection,
    optionsType: {} as MaybeFindFirstCharitycauseOptions,
    schemaType: null as Query["charitycause"],
  } as const
);
  
    /**
  * Finds one charitycause by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneCharitycauseOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneCharitycauseOptions>):
    Promise<
      GadgetRecord<
        SelectedCharitycauseOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "charitycauses";
  modelApiIdentifier: "charitycause";
  defaultSelection: typeof DefaultCharitycauseSelection;
  selectionType: AvailableCharitycauseSelection;
  optionsType: FindOneCharitycauseOptions;
  schemaType: Query["charitycause"];
} = Object.assign(
  async <Options extends FindOneCharitycauseOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneCharitycauseOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedCharitycauseOrDefault<Options>
      > & SelectedCharitycauseOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedCharitycauseOrDefault<Options>>(
      this,
      "charitycauses",
      "id",
      value,
      DefaultCharitycauseSelection,
      "charitycause",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "charitycauses",
    modelApiIdentifier: "charitycause",
    defaultSelection: DefaultCharitycauseSelection,
    selectionType: {} as AvailableCharitycauseSelection,
    optionsType: {} as FindOneCharitycauseOptions,
    schemaType: null as Query["charitycause"],
  } as const
)
  
    update = Object.assign(updateCharitycause,
  {
    type: "action",
    operationName: "updateCharitycause",
    namespace: null,
    modelApiIdentifier: "charitycause",
    modelSelectionField: "charitycause",
    isBulk: false,
    defaultSelection: DefaultCharitycauseSelection,
    selectionType: {} as AvailableCharitycauseSelection,
    optionsType: {} as UpdateCharitycauseOptions,
    schemaType: null as Query["charitycause"],

    variablesType: undefined as {
      id: string,
              charitycause?: UpdateCharitycauseInput,
          }  | updateCharitycauseVariables
    
    & { id: string; }
    
    | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "charitycause": {
        required: false,
        type: "UpdateCharitycauseInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
    create = Object.assign(createCharitycause,
  {
    type: "action",
    operationName: "createCharitycause",
    namespace: null,
    modelApiIdentifier: "charitycause",
    modelSelectionField: "charitycause",
    isBulk: false,
    defaultSelection: DefaultCharitycauseSelection,
    selectionType: {} as AvailableCharitycauseSelection,
    optionsType: {} as CreateCharitycauseOptions,
    schemaType: null as Query["charitycause"],

    variablesType: undefined as {
      
              charitycause?: CreateCharitycauseInput,
          }  | createCharitycauseVariables
    
    | undefined,

    variables: {
      "charitycause": {
        required: false,
        type: "CreateCharitycauseInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
    delete = Object.assign(deleteCharitycause,
  {
    type: "action",
    operationName: "deleteCharitycause",
    namespace: null,
    modelApiIdentifier: "charitycause",
    modelSelectionField: "charitycause",
    isBulk: false,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteCharitycauseOptions,
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
  <Options extends DeleteCharitycauseOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteCharitycauseOptions>
  ): Promise<void>;
  type: "action";
  operationName: "bulkDeleteCharitycauses";
  namespace: null;
  modelApiIdentifier: "charitycause";
  modelSelectionField: "charitycauses";
  isBulk: true;
  defaultSelection: null;
  selectionType: Record<string, never>;
  optionsType: DeleteCharitycauseOptions;
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
  async <Options extends DeleteCharitycauseOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteCharitycauseOptions>
  ) => {
    return (await actionRunner<void>(
      this,
      "bulkDeleteCharitycauses",
      null,
      "charitycause",
      "charitycauses",
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
    operationName: "bulkDeleteCharitycauses",
    namespace: null,
    modelApiIdentifier: "charitycause",
    modelSelectionField: "charitycauses",
    isBulk: true,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteCharitycauseOptions,
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
