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
      Charity,
      CharitySort,
      CharityFilter,
      AvailableCharitySelection,
      CreateCharityInput,
      BulkDeleteCharitiesResult,
      UpdateCharityInput,
  
} from "../types.js";

export const DefaultCharitySelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "name": true,
  "website_url": true,
  "description": true
} as const;

/** 
* Produce a type that holds only the selected fields (and nested fields) of "charity". The present fields in the result type of this are dynamic based on the options to each call that uses it. 
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above. 
*/
export type SelectedCharityOrDefault<Options extends Selectable<AvailableCharitySelection>> = DeepFilterNever<
  Select<
    Charity, 
    DefaultSelection<
      AvailableCharitySelection,
      Options,
      typeof DefaultCharitySelection
    >
  >>;

/** Options that can be passed to the `CharityManager#findOne` method */
export interface FindOneCharityOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCharitySelection;
};


/** Options that can be passed to the `CharityManager#maybeFindOne` method */
export interface MaybeFindOneCharityOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCharitySelection;
};


/** Options that can be passed to the `CharityManager#findMany` method */
export interface FindManyCharitiesOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCharitySelection;
  /** Return records sorted by these sorts */
  sort?: CharitySort | CharitySort[] | null;
  /** Only return records matching these filters. */
  filter?: CharityFilter | CharityFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};


/** Options that can be passed to the `CharityManager#findFirst` method */
export interface FindFirstCharityOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCharitySelection;
  /** Return records sorted by these sorts */
  sort?: CharitySort | CharitySort[] | null;
  /** Only return records matching these filters. */
  filter?: CharityFilter | CharityFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


/** Options that can be passed to the `CharityManager#maybeFindFirst` method */
export interface MaybeFindFirstCharityOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCharitySelection;
  /** Return records sorted by these sorts */
  sort?: CharitySort | CharitySort[] | null;
  /** Only return records matching these filters. */
  filter?: CharityFilter | CharityFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};



export interface CreateCharityOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCharitySelection;
};



export interface DeleteCharityOptions {
};



export interface UpdateCharityOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableCharitySelection;
};




    
  type createCharityVariables =
      CreateCharityInput



/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createCharity<Options extends CreateCharityOptions>(
  
    variables: createCharityVariables,

  options?: LimitToKnownKeys<Options, CreateCharityOptions>
): Promise<SelectedCharityOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharityOrDefault<Options>>>

// Default nested api identifier overload
async function createCharity<Options extends CreateCharityOptions>(
  
      variables: {
          charity?: CreateCharityInput,
        },
  
  options?: LimitToKnownKeys<Options, CreateCharityOptions>
): Promise<SelectedCharityOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharityOrDefault<Options>>>;

// Function implementation
async function createCharity<Options extends CreateCharityOptions>(
  this: CharityManager,
  
      variables: {
          charity?: CreateCharityInput,
        }
    
      | createCharityVariables
    ,
  
  options?: LimitToKnownKeys<Options, CreateCharityOptions>
): Promise<SelectedCharityOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharityOrDefault<Options>>>
 {
    let newVariables: {
      charity?: CreateCharityInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "charity";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: CreateCharityInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof CreateCharityInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedCharityOrDefault<Options>>(
      this,
      "createCharity",
      DefaultCharitySelection,
      "charity",
      "charity",
      false,
      {
        "charity": {
          value: newVariables.charity,
          required: false,
          type: "CreateCharityInput",
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
async function deleteCharity<Options extends DeleteCharityOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteCharityOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedCharityOrDefault<Options>>>;

// Function implementation
async function deleteCharity<Options extends DeleteCharityOptions>(
  this: CharityManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteCharityOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedCharityOrDefault<Options>>>
 {

    return (await actionRunner<void>(
      this,
      "deleteCharity",
      null,
      "charity",
      "charity",
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
  
    
  type updateCharityVariables =
      UpdateCharityInput



/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateCharity<Options extends UpdateCharityOptions>(
  id: string,
    variables: updateCharityVariables,

  options?: LimitToKnownKeys<Options, UpdateCharityOptions>
): Promise<SelectedCharityOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharityOrDefault<Options>>>

// Default nested api identifier overload
async function updateCharity<Options extends UpdateCharityOptions>(
  id: string,
      variables: {
          charity?: UpdateCharityInput,
        },
  
  options?: LimitToKnownKeys<Options, UpdateCharityOptions>
): Promise<SelectedCharityOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharityOrDefault<Options>>>;

// Function implementation
async function updateCharity<Options extends UpdateCharityOptions>(
  this: CharityManager,
  id: string,
      variables: {
          charity?: UpdateCharityInput,
        }
    
      | updateCharityVariables
    ,
  
  options?: LimitToKnownKeys<Options, UpdateCharityOptions>
): Promise<SelectedCharityOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharityOrDefault<Options>>>
 {
    let newVariables: {
      charity?: UpdateCharityInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "charity";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: UpdateCharityInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof UpdateCharityInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedCharityOrDefault<Options>>(
      this,
      "updateCharity",
      DefaultCharitySelection,
      "charity",
      "charity",
      false,
      {
        id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
        "charity": {
          value: newVariables.charity,
          required: false,
          type: "UpdateCharityInput",
        },
      },
      options,
      null
    ));
  }
  

/** All the actions available at the collection level and record level for "charity" */
export class CharityManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one charity by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneCharityOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneCharityOptions>):
    Promise<
      GadgetRecord<
        SelectedCharityOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "charity";
  modelApiIdentifier: "charity";
  defaultSelection: typeof DefaultCharitySelection;
  selectionType: AvailableCharitySelection;
  optionsType: FindOneCharityOptions;
  schemaType: Query["charity"];
} = Object.assign(
  async <Options extends FindOneCharityOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneCharityOptions>) => {
    return await findOneRunner<SelectedCharityOrDefault<Options>>(
      this,
      "charity",
      id,
      DefaultCharitySelection,
      "charity",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "charity",
    modelApiIdentifier: "charity",
    defaultSelection: DefaultCharitySelection,
    selectionType: {} as AvailableCharitySelection,
    optionsType: {} as FindOneCharityOptions,
    schemaType: null as Query["charity"],
  } as const
)

  
    /**
 * Finds one charity by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneCharityOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneCharityOptions>):
    Promise<
      GadgetRecord<
        SelectedCharityOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "charity";
  modelApiIdentifier: "charity";
  defaultSelection: typeof DefaultCharitySelection;
  selectionType: AvailableCharitySelection;
  optionsType: MaybeFindOneCharityOptions;
  schemaType: Query["charity"];
} = Object.assign(
  async <Options extends MaybeFindOneCharityOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneCharityOptions>) => {
    const record = await findOneRunner<SelectedCharityOrDefault<Options>>(
      this,
      "charity",
      id,
      DefaultCharitySelection,
      "charity",
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "charity",
    modelApiIdentifier: "charity",
    defaultSelection: DefaultCharitySelection,
    selectionType: {} as AvailableCharitySelection,
    optionsType: {} as MaybeFindOneCharityOptions,
    schemaType: null as Query["charity"],
  } as const
)

  
    /**
 * Finds many charity. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyCharitiesOptions>(options?: LimitToKnownKeys<Options, FindManyCharitiesOptions>):
    Promise<
      GadgetRecordList<
        SelectedCharityOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "charities";
  modelApiIdentifier: "charity";
  defaultSelection: typeof DefaultCharitySelection;
  selectionType: AvailableCharitySelection;
  optionsType: FindManyCharitiesOptions;
  schemaType: Query["charity"];
} = Object.assign(
  async <Options extends FindManyCharitiesOptions>(options?: LimitToKnownKeys<Options, FindManyCharitiesOptions>):
    Promise<
      GadgetRecordList<
        SelectedCharityOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedCharityOrDefault<Options>>(
      this,
      "charities",
      DefaultCharitySelection,
      "charity",
      options
    );
  },
  {
    type: "findMany",
    operationName: "charities",
    modelApiIdentifier: "charity",
    defaultSelection: DefaultCharitySelection,
    selectionType: {} as AvailableCharitySelection,
    optionsType: {} as FindManyCharitiesOptions,
    schemaType: null as Query["charity"],
  } as const
);
  
    /**
 * Finds the first matching charity. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstCharityOptions>(options?: LimitToKnownKeys<Options, FindFirstCharityOptions>):
    Promise<
      GadgetRecord<
        SelectedCharityOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "charities";
  modelApiIdentifier: "charity";
  defaultSelection: typeof DefaultCharitySelection;
  selectionType: AvailableCharitySelection;
  optionsType: FindFirstCharityOptions;
  schemaType: Query["charity"];
} = Object.assign(
  async <Options extends FindFirstCharityOptions>(options?: LimitToKnownKeys<Options, FindFirstCharityOptions>):
    Promise<
      GadgetRecord<
        SelectedCharityOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedCharityOrDefault<Options>>(
      this,
      "charities",
      DefaultCharitySelection,
      "charity",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "charities",
    modelApiIdentifier: "charity",
    defaultSelection: DefaultCharitySelection,
    selectionType: {} as AvailableCharitySelection,
    optionsType: {} as FindFirstCharityOptions,
    schemaType: null as Query["charity"],
  } as const
);
  
    /**
 * Finds the first matching charity. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstCharityOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstCharityOptions>):
    Promise<
      GadgetRecord<
        SelectedCharityOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "charities";
  modelApiIdentifier: "charity";
  defaultSelection: typeof DefaultCharitySelection;
  selectionType: AvailableCharitySelection;
  optionsType: MaybeFindFirstCharityOptions;
  schemaType: Query["charity"];
} = Object.assign(
  async <Options extends MaybeFindFirstCharityOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstCharityOptions>):
    Promise<
      GadgetRecord<
        SelectedCharityOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedCharityOrDefault<Options>>(
      this,
      "charities",
      DefaultCharitySelection,
      "charity",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "charities",
    modelApiIdentifier: "charity",
    defaultSelection: DefaultCharitySelection,
    selectionType: {} as AvailableCharitySelection,
    optionsType: {} as MaybeFindFirstCharityOptions,
    schemaType: null as Query["charity"],
  } as const
);
  
    /**
  * Finds one charity by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneCharityOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneCharityOptions>):
    Promise<
      GadgetRecord<
        SelectedCharityOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "charities";
  modelApiIdentifier: "charity";
  defaultSelection: typeof DefaultCharitySelection;
  selectionType: AvailableCharitySelection;
  optionsType: FindOneCharityOptions;
  schemaType: Query["charity"];
} = Object.assign(
  async <Options extends FindOneCharityOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneCharityOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedCharityOrDefault<Options>
      > & SelectedCharityOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedCharityOrDefault<Options>>(
      this,
      "charities",
      "id",
      value,
      DefaultCharitySelection,
      "charity",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "charities",
    modelApiIdentifier: "charity",
    defaultSelection: DefaultCharitySelection,
    selectionType: {} as AvailableCharitySelection,
    optionsType: {} as FindOneCharityOptions,
    schemaType: null as Query["charity"],
  } as const
)
  
    create = Object.assign(createCharity,
  {
    type: "action",
    operationName: "createCharity",
    namespace: null,
    modelApiIdentifier: "charity",
    modelSelectionField: "charity",
    isBulk: false,
    defaultSelection: DefaultCharitySelection,
    selectionType: {} as AvailableCharitySelection,
    optionsType: {} as CreateCharityOptions,
    schemaType: null as Query["charity"],

    variablesType: undefined as {
      
              charity?: CreateCharityInput,
          }  | createCharityVariables
    
    | undefined,

    variables: {
      "charity": {
        required: false,
        type: "CreateCharityInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
    delete = Object.assign(deleteCharity,
  {
    type: "action",
    operationName: "deleteCharity",
    namespace: null,
    modelApiIdentifier: "charity",
    modelSelectionField: "charity",
    isBulk: false,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteCharityOptions,
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
  <Options extends DeleteCharityOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteCharityOptions>
  ): Promise<void>;
  type: "action";
  operationName: "bulkDeleteCharities";
  namespace: null;
  modelApiIdentifier: "charity";
  modelSelectionField: "charities";
  isBulk: true;
  defaultSelection: null;
  selectionType: Record<string, never>;
  optionsType: DeleteCharityOptions;
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
  async <Options extends DeleteCharityOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteCharityOptions>
  ) => {
    return (await actionRunner<void>(
      this,
      "bulkDeleteCharities",
      null,
      "charity",
      "charities",
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
    operationName: "bulkDeleteCharities",
    namespace: null,
    modelApiIdentifier: "charity",
    modelSelectionField: "charities",
    isBulk: true,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteCharityOptions,
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
  
    update = Object.assign(updateCharity,
  {
    type: "action",
    operationName: "updateCharity",
    namespace: null,
    modelApiIdentifier: "charity",
    modelSelectionField: "charity",
    isBulk: false,
    defaultSelection: DefaultCharitySelection,
    selectionType: {} as AvailableCharitySelection,
    optionsType: {} as UpdateCharityOptions,
    schemaType: null as Query["charity"],

    variablesType: undefined as {
      id: string,
              charity?: UpdateCharityInput,
          }  | updateCharityVariables
    
    & { id: string; }
    
    | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "charity": {
        required: false,
        type: "UpdateCharityInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
}
