import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, Cause, CauseSort, CauseFilter, AvailableCauseSelection, UpdateCauseInput, CreateCauseInput } from "../types.js";
export declare const DefaultCauseSelection: {
    readonly id: true;
    readonly __typename: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly category: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "cause". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedCauseOrDefault<Options extends Selectable<AvailableCauseSelection>> = DeepFilterNever<Select<Cause, DefaultSelection<AvailableCauseSelection, Options, typeof DefaultCauseSelection>>>;
/** Options that can be passed to the `CauseManager#findOne` method */
export interface FindOneCauseOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableCauseSelection;
}
/** Options that can be passed to the `CauseManager#maybeFindOne` method */
export interface MaybeFindOneCauseOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableCauseSelection;
}
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
}
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
}
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
}
export interface UpdateCauseOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableCauseSelection;
}
export interface CreateCauseOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableCauseSelection;
}
export interface DeleteCauseOptions {
}
type updateCauseVariables = UpdateCauseInput;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateCause<Options extends UpdateCauseOptions>(id: string, variables: updateCauseVariables, options?: LimitToKnownKeys<Options, UpdateCauseOptions>): Promise<SelectedCauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCauseOrDefault<Options>>>;
declare function updateCause<Options extends UpdateCauseOptions>(id: string, variables: {
    cause?: UpdateCauseInput;
}, options?: LimitToKnownKeys<Options, UpdateCauseOptions>): Promise<SelectedCauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCauseOrDefault<Options>>>;
type createCauseVariables = CreateCauseInput;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createCause<Options extends CreateCauseOptions>(variables: createCauseVariables, options?: LimitToKnownKeys<Options, CreateCauseOptions>): Promise<SelectedCauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCauseOrDefault<Options>>>;
declare function createCause<Options extends CreateCauseOptions>(variables: {
    cause?: CreateCauseInput;
}, options?: LimitToKnownKeys<Options, CreateCauseOptions>): Promise<SelectedCauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCauseOrDefault<Options>>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteCause<Options extends DeleteCauseOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteCauseOptions>): Promise<void extends void ? void : GadgetRecord<SelectedCauseOrDefault<Options>>>;
/** All the actions available at the collection level and record level for "cause" */
export declare class CauseManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one cause by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneCauseOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneCauseOptions>): Promise<GadgetRecord<SelectedCauseOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "cause";
        modelApiIdentifier: "cause";
        defaultSelection: typeof DefaultCauseSelection;
        selectionType: AvailableCauseSelection;
        optionsType: FindOneCauseOptions;
        schemaType: Query["cause"];
    };
    /**
 * Finds one cause by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneCauseOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneCauseOptions>): Promise<GadgetRecord<SelectedCauseOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "cause";
        modelApiIdentifier: "cause";
        defaultSelection: typeof DefaultCauseSelection;
        selectionType: AvailableCauseSelection;
        optionsType: MaybeFindOneCauseOptions;
        schemaType: Query["cause"];
    };
    /**
 * Finds many cause. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyCausesOptions>(options?: LimitToKnownKeys<Options, FindManyCausesOptions>): Promise<GadgetRecordList<SelectedCauseOrDefault<Options>>>;
        type: "findMany";
        operationName: "causes";
        modelApiIdentifier: "cause";
        defaultSelection: typeof DefaultCauseSelection;
        selectionType: AvailableCauseSelection;
        optionsType: FindManyCausesOptions;
        schemaType: Query["cause"];
    };
    /**
 * Finds the first matching cause. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstCauseOptions>(options?: LimitToKnownKeys<Options, FindFirstCauseOptions>): Promise<GadgetRecord<SelectedCauseOrDefault<Options>>>;
        type: "findFirst";
        operationName: "causes";
        modelApiIdentifier: "cause";
        defaultSelection: typeof DefaultCauseSelection;
        selectionType: AvailableCauseSelection;
        optionsType: FindFirstCauseOptions;
        schemaType: Query["cause"];
    };
    /**
 * Finds the first matching cause. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstCauseOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstCauseOptions>): Promise<GadgetRecord<SelectedCauseOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "causes";
        modelApiIdentifier: "cause";
        defaultSelection: typeof DefaultCauseSelection;
        selectionType: AvailableCauseSelection;
        optionsType: MaybeFindFirstCauseOptions;
        schemaType: Query["cause"];
    };
    /**
  * Finds one cause by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneCauseOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneCauseOptions>): Promise<GadgetRecord<SelectedCauseOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "causes";
        modelApiIdentifier: "cause";
        defaultSelection: typeof DefaultCauseSelection;
        selectionType: AvailableCauseSelection;
        optionsType: FindOneCauseOptions;
        schemaType: Query["cause"];
    };
    update: typeof updateCause & {
        readonly type: "action";
        readonly operationName: "updateCause";
        readonly namespace: null;
        readonly modelApiIdentifier: "cause";
        readonly modelSelectionField: "cause";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly category: true;
        };
        readonly selectionType: AvailableCauseSelection;
        readonly optionsType: UpdateCauseOptions;
        readonly schemaType: Cause | null;
        readonly variablesType: {
            id: string;
            cause?: UpdateCauseInput | undefined;
        } | (UpdateCauseInput & {
            id: string;
        }) | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
            readonly cause: {
                readonly required: false;
                readonly type: "UpdateCauseInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
    create: typeof createCause & {
        readonly type: "action";
        readonly operationName: "createCause";
        readonly namespace: null;
        readonly modelApiIdentifier: "cause";
        readonly modelSelectionField: "cause";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly category: true;
        };
        readonly selectionType: AvailableCauseSelection;
        readonly optionsType: CreateCauseOptions;
        readonly schemaType: Cause | null;
        readonly variablesType: CreateCauseInput | {
            cause?: CreateCauseInput | undefined;
        } | undefined;
        readonly variables: {
            readonly cause: {
                readonly required: false;
                readonly type: "CreateCauseInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
    delete: typeof deleteCause & {
        readonly type: "action";
        readonly operationName: "deleteCause";
        readonly namespace: null;
        readonly modelApiIdentifier: "cause";
        readonly modelSelectionField: "cause";
        readonly isBulk: false;
        readonly defaultSelection: null;
        readonly selectionType: Record<string, never>;
        readonly optionsType: DeleteCauseOptions;
        readonly schemaType: null;
        readonly variablesType: {
            id: string;
        } | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: false;
        readonly isCreateOrUpdateAction: false;
        readonly paramOnlyVariables: readonly [];
    };
    /**
  * Executes the bulkDelete action on all records specified by `ids`. Deletes the records on the server.
  */
    bulkDelete: {
        <Options extends DeleteCauseOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteCauseOptions>): Promise<void>;
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
    };
}
export {};
