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
      Donation,
      DonationSort,
      DonationFilter,
      AvailableDonationSelection,
      BulkDeleteDonationsResult,
      CreateDonationInput,
      UpdateDonationInput,
  
} from "../types.js";

export const DefaultDonationSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "amount": true,
  "type": true
} as const;

/** 
* Produce a type that holds only the selected fields (and nested fields) of "donation". The present fields in the result type of this are dynamic based on the options to each call that uses it. 
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above. 
*/
export type SelectedDonationOrDefault<Options extends Selectable<AvailableDonationSelection>> = DeepFilterNever<
  Select<
    Donation, 
    DefaultSelection<
      AvailableDonationSelection,
      Options,
      typeof DefaultDonationSelection
    >
  >>;

/** Options that can be passed to the `DonationManager#findOne` method */
export interface FindOneDonationOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDonationSelection;
};


/** Options that can be passed to the `DonationManager#maybeFindOne` method */
export interface MaybeFindOneDonationOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDonationSelection;
};


/** Options that can be passed to the `DonationManager#findMany` method */
export interface FindManyDonationsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDonationSelection;
  /** Return records sorted by these sorts */
  sort?: DonationSort | DonationSort[] | null;
  /** Only return records matching these filters. */
  filter?: DonationFilter | DonationFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};


/** Options that can be passed to the `DonationManager#findFirst` method */
export interface FindFirstDonationOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDonationSelection;
  /** Return records sorted by these sorts */
  sort?: DonationSort | DonationSort[] | null;
  /** Only return records matching these filters. */
  filter?: DonationFilter | DonationFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


/** Options that can be passed to the `DonationManager#maybeFindFirst` method */
export interface MaybeFindFirstDonationOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDonationSelection;
  /** Return records sorted by these sorts */
  sort?: DonationSort | DonationSort[] | null;
  /** Only return records matching these filters. */
  filter?: DonationFilter | DonationFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};



export interface DeleteDonationOptions {
};



export interface CreateDonationOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDonationSelection;
};



export interface UpdateDonationOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDonationSelection;
};




    

/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Default nested api identifier overload
async function deleteDonation<Options extends DeleteDonationOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteDonationOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedDonationOrDefault<Options>>>;

// Function implementation
async function deleteDonation<Options extends DeleteDonationOptions>(
  this: DonationManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteDonationOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedDonationOrDefault<Options>>>
 {

    return (await actionRunner<void>(
      this,
      "deleteDonation",
      null,
      "donation",
      "donation",
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
  
    
  type createDonationVariables =
      CreateDonationInput



/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createDonation<Options extends CreateDonationOptions>(
  
    variables: createDonationVariables,

  options?: LimitToKnownKeys<Options, CreateDonationOptions>
): Promise<SelectedDonationOrDefault<Options> extends void ? void : GadgetRecord<SelectedDonationOrDefault<Options>>>

// Default nested api identifier overload
async function createDonation<Options extends CreateDonationOptions>(
  
      variables: {
          donation?: CreateDonationInput,
        },
  
  options?: LimitToKnownKeys<Options, CreateDonationOptions>
): Promise<SelectedDonationOrDefault<Options> extends void ? void : GadgetRecord<SelectedDonationOrDefault<Options>>>;

// Function implementation
async function createDonation<Options extends CreateDonationOptions>(
  this: DonationManager,
  
      variables: {
          donation?: CreateDonationInput,
        }
    
      | createDonationVariables
    ,
  
  options?: LimitToKnownKeys<Options, CreateDonationOptions>
): Promise<SelectedDonationOrDefault<Options> extends void ? void : GadgetRecord<SelectedDonationOrDefault<Options>>>
 {
    let newVariables: {
      donation?: CreateDonationInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "donation";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: CreateDonationInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof CreateDonationInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedDonationOrDefault<Options>>(
      this,
      "createDonation",
      DefaultDonationSelection,
      "donation",
      "donation",
      false,
      {
        "donation": {
          value: newVariables.donation,
          required: false,
          type: "CreateDonationInput",
        },
      },
      options,
      null
    ));
  }
  
    
  type updateDonationVariables =
      UpdateDonationInput



/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateDonation<Options extends UpdateDonationOptions>(
  id: string,
    variables: updateDonationVariables,

  options?: LimitToKnownKeys<Options, UpdateDonationOptions>
): Promise<SelectedDonationOrDefault<Options> extends void ? void : GadgetRecord<SelectedDonationOrDefault<Options>>>

// Default nested api identifier overload
async function updateDonation<Options extends UpdateDonationOptions>(
  id: string,
      variables: {
          donation?: UpdateDonationInput,
        },
  
  options?: LimitToKnownKeys<Options, UpdateDonationOptions>
): Promise<SelectedDonationOrDefault<Options> extends void ? void : GadgetRecord<SelectedDonationOrDefault<Options>>>;

// Function implementation
async function updateDonation<Options extends UpdateDonationOptions>(
  this: DonationManager,
  id: string,
      variables: {
          donation?: UpdateDonationInput,
        }
    
      | updateDonationVariables
    ,
  
  options?: LimitToKnownKeys<Options, UpdateDonationOptions>
): Promise<SelectedDonationOrDefault<Options> extends void ? void : GadgetRecord<SelectedDonationOrDefault<Options>>>
 {
    let newVariables: {
      donation?: UpdateDonationInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "donation";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: UpdateDonationInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof UpdateDonationInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedDonationOrDefault<Options>>(
      this,
      "updateDonation",
      DefaultDonationSelection,
      "donation",
      "donation",
      false,
      {
        id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
        "donation": {
          value: newVariables.donation,
          required: false,
          type: "UpdateDonationInput",
        },
      },
      options,
      null
    ));
  }
  

/** All the actions available at the collection level and record level for "donation" */
export class DonationManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one donation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneDonationOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneDonationOptions>):
    Promise<
      GadgetRecord<
        SelectedDonationOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "donation";
  modelApiIdentifier: "donation";
  defaultSelection: typeof DefaultDonationSelection;
  selectionType: AvailableDonationSelection;
  optionsType: FindOneDonationOptions;
  schemaType: Query["donation"];
} = Object.assign(
  async <Options extends FindOneDonationOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneDonationOptions>) => {
    return await findOneRunner<SelectedDonationOrDefault<Options>>(
      this,
      "donation",
      id,
      DefaultDonationSelection,
      "donation",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "donation",
    modelApiIdentifier: "donation",
    defaultSelection: DefaultDonationSelection,
    selectionType: {} as AvailableDonationSelection,
    optionsType: {} as FindOneDonationOptions,
    schemaType: null as Query["donation"],
  } as const
)

  
    /**
 * Finds one donation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneDonationOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneDonationOptions>):
    Promise<
      GadgetRecord<
        SelectedDonationOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "donation";
  modelApiIdentifier: "donation";
  defaultSelection: typeof DefaultDonationSelection;
  selectionType: AvailableDonationSelection;
  optionsType: MaybeFindOneDonationOptions;
  schemaType: Query["donation"];
} = Object.assign(
  async <Options extends MaybeFindOneDonationOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneDonationOptions>) => {
    const record = await findOneRunner<SelectedDonationOrDefault<Options>>(
      this,
      "donation",
      id,
      DefaultDonationSelection,
      "donation",
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "donation",
    modelApiIdentifier: "donation",
    defaultSelection: DefaultDonationSelection,
    selectionType: {} as AvailableDonationSelection,
    optionsType: {} as MaybeFindOneDonationOptions,
    schemaType: null as Query["donation"],
  } as const
)

  
    /**
 * Finds many donation. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyDonationsOptions>(options?: LimitToKnownKeys<Options, FindManyDonationsOptions>):
    Promise<
      GadgetRecordList<
        SelectedDonationOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "donations";
  modelApiIdentifier: "donation";
  defaultSelection: typeof DefaultDonationSelection;
  selectionType: AvailableDonationSelection;
  optionsType: FindManyDonationsOptions;
  schemaType: Query["donation"];
} = Object.assign(
  async <Options extends FindManyDonationsOptions>(options?: LimitToKnownKeys<Options, FindManyDonationsOptions>):
    Promise<
      GadgetRecordList<
        SelectedDonationOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedDonationOrDefault<Options>>(
      this,
      "donations",
      DefaultDonationSelection,
      "donation",
      options
    );
  },
  {
    type: "findMany",
    operationName: "donations",
    modelApiIdentifier: "donation",
    defaultSelection: DefaultDonationSelection,
    selectionType: {} as AvailableDonationSelection,
    optionsType: {} as FindManyDonationsOptions,
    schemaType: null as Query["donation"],
  } as const
);
  
    /**
 * Finds the first matching donation. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstDonationOptions>(options?: LimitToKnownKeys<Options, FindFirstDonationOptions>):
    Promise<
      GadgetRecord<
        SelectedDonationOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "donations";
  modelApiIdentifier: "donation";
  defaultSelection: typeof DefaultDonationSelection;
  selectionType: AvailableDonationSelection;
  optionsType: FindFirstDonationOptions;
  schemaType: Query["donation"];
} = Object.assign(
  async <Options extends FindFirstDonationOptions>(options?: LimitToKnownKeys<Options, FindFirstDonationOptions>):
    Promise<
      GadgetRecord<
        SelectedDonationOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedDonationOrDefault<Options>>(
      this,
      "donations",
      DefaultDonationSelection,
      "donation",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "donations",
    modelApiIdentifier: "donation",
    defaultSelection: DefaultDonationSelection,
    selectionType: {} as AvailableDonationSelection,
    optionsType: {} as FindFirstDonationOptions,
    schemaType: null as Query["donation"],
  } as const
);
  
    /**
 * Finds the first matching donation. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstDonationOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstDonationOptions>):
    Promise<
      GadgetRecord<
        SelectedDonationOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "donations";
  modelApiIdentifier: "donation";
  defaultSelection: typeof DefaultDonationSelection;
  selectionType: AvailableDonationSelection;
  optionsType: MaybeFindFirstDonationOptions;
  schemaType: Query["donation"];
} = Object.assign(
  async <Options extends MaybeFindFirstDonationOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstDonationOptions>):
    Promise<
      GadgetRecord<
        SelectedDonationOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedDonationOrDefault<Options>>(
      this,
      "donations",
      DefaultDonationSelection,
      "donation",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "donations",
    modelApiIdentifier: "donation",
    defaultSelection: DefaultDonationSelection,
    selectionType: {} as AvailableDonationSelection,
    optionsType: {} as MaybeFindFirstDonationOptions,
    schemaType: null as Query["donation"],
  } as const
);
  
    /**
  * Finds one donation by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneDonationOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneDonationOptions>):
    Promise<
      GadgetRecord<
        SelectedDonationOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "donations";
  modelApiIdentifier: "donation";
  defaultSelection: typeof DefaultDonationSelection;
  selectionType: AvailableDonationSelection;
  optionsType: FindOneDonationOptions;
  schemaType: Query["donation"];
} = Object.assign(
  async <Options extends FindOneDonationOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneDonationOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedDonationOrDefault<Options>
      > & SelectedDonationOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedDonationOrDefault<Options>>(
      this,
      "donations",
      "id",
      value,
      DefaultDonationSelection,
      "donation",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "donations",
    modelApiIdentifier: "donation",
    defaultSelection: DefaultDonationSelection,
    selectionType: {} as AvailableDonationSelection,
    optionsType: {} as FindOneDonationOptions,
    schemaType: null as Query["donation"],
  } as const
)
  
    delete = Object.assign(deleteDonation,
  {
    type: "action",
    operationName: "deleteDonation",
    namespace: null,
    modelApiIdentifier: "donation",
    modelSelectionField: "donation",
    isBulk: false,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteDonationOptions,
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
  <Options extends DeleteDonationOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteDonationOptions>
  ): Promise<void>;
  type: "action";
  operationName: "bulkDeleteDonations";
  namespace: null;
  modelApiIdentifier: "donation";
  modelSelectionField: "donations";
  isBulk: true;
  defaultSelection: null;
  selectionType: Record<string, never>;
  optionsType: DeleteDonationOptions;
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
  async <Options extends DeleteDonationOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteDonationOptions>
  ) => {
    return (await actionRunner<void>(
      this,
      "bulkDeleteDonations",
      null,
      "donation",
      "donations",
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
    operationName: "bulkDeleteDonations",
    namespace: null,
    modelApiIdentifier: "donation",
    modelSelectionField: "donations",
    isBulk: true,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteDonationOptions,
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
  
    create = Object.assign(createDonation,
  {
    type: "action",
    operationName: "createDonation",
    namespace: null,
    modelApiIdentifier: "donation",
    modelSelectionField: "donation",
    isBulk: false,
    defaultSelection: DefaultDonationSelection,
    selectionType: {} as AvailableDonationSelection,
    optionsType: {} as CreateDonationOptions,
    schemaType: null as Query["donation"],

    variablesType: undefined as {
      
              donation?: CreateDonationInput,
          }  | createDonationVariables
    
    | undefined,

    variables: {
      "donation": {
        required: false,
        type: "CreateDonationInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
    update = Object.assign(updateDonation,
  {
    type: "action",
    operationName: "updateDonation",
    namespace: null,
    modelApiIdentifier: "donation",
    modelSelectionField: "donation",
    isBulk: false,
    defaultSelection: DefaultDonationSelection,
    selectionType: {} as AvailableDonationSelection,
    optionsType: {} as UpdateDonationOptions,
    schemaType: null as Query["donation"],

    variablesType: undefined as {
      id: string,
              donation?: UpdateDonationInput,
          }  | updateDonationVariables
    
    & { id: string; }
    
    | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "donation": {
        required: false,
        type: "UpdateDonationInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
}
