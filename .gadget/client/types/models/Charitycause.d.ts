import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, Charitycause, CharitycauseSort, CharitycauseFilter, AvailableCharitycauseSelection, UpdateCharitycauseInput, CreateCharitycauseInput } from "../types.js";
export declare const DefaultCharitycauseSelection: {
    readonly id: true;
    readonly __typename: true;
    readonly createdAt: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "charitycause". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedCharitycauseOrDefault<Options extends Selectable<AvailableCharitycauseSelection>> = DeepFilterNever<Select<Charitycause, DefaultSelection<AvailableCharitycauseSelection, Options, typeof DefaultCharitycauseSelection>>>;
/** Options that can be passed to the `CharitycauseManager#findOne` method */
export interface FindOneCharitycauseOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableCharitycauseSelection;
}
/** Options that can be passed to the `CharitycauseManager#maybeFindOne` method */
export interface MaybeFindOneCharitycauseOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableCharitycauseSelection;
}
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
}
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
}
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
}
export interface UpdateCharitycauseOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableCharitycauseSelection;
}
export interface CreateCharitycauseOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableCharitycauseSelection;
}
export interface DeleteCharitycauseOptions {
}
type updateCharitycauseVariables = UpdateCharitycauseInput;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateCharitycause<Options extends UpdateCharitycauseOptions>(id: string, variables: updateCharitycauseVariables, options?: LimitToKnownKeys<Options, UpdateCharitycauseOptions>): Promise<SelectedCharitycauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharitycauseOrDefault<Options>>>;
declare function updateCharitycause<Options extends UpdateCharitycauseOptions>(id: string, variables: {
    charitycause?: UpdateCharitycauseInput;
}, options?: LimitToKnownKeys<Options, UpdateCharitycauseOptions>): Promise<SelectedCharitycauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharitycauseOrDefault<Options>>>;
type createCharitycauseVariables = CreateCharitycauseInput;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createCharitycause<Options extends CreateCharitycauseOptions>(variables: createCharitycauseVariables, options?: LimitToKnownKeys<Options, CreateCharitycauseOptions>): Promise<SelectedCharitycauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharitycauseOrDefault<Options>>>;
declare function createCharitycause<Options extends CreateCharitycauseOptions>(variables: {
    charitycause?: CreateCharitycauseInput;
}, options?: LimitToKnownKeys<Options, CreateCharitycauseOptions>): Promise<SelectedCharitycauseOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharitycauseOrDefault<Options>>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteCharitycause<Options extends DeleteCharitycauseOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteCharitycauseOptions>): Promise<void extends void ? void : GadgetRecord<SelectedCharitycauseOrDefault<Options>>>;
/** All the actions available at the collection level and record level for "charitycause" */
export declare class CharitycauseManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one charitycause by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneCharitycauseOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneCharitycauseOptions>): Promise<GadgetRecord<SelectedCharitycauseOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "charitycause";
        modelApiIdentifier: "charitycause";
        defaultSelection: typeof DefaultCharitycauseSelection;
        selectionType: AvailableCharitycauseSelection;
        optionsType: FindOneCharitycauseOptions;
        schemaType: Query["charitycause"];
    };
    /**
 * Finds one charitycause by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneCharitycauseOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneCharitycauseOptions>): Promise<GadgetRecord<SelectedCharitycauseOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "charitycause";
        modelApiIdentifier: "charitycause";
        defaultSelection: typeof DefaultCharitycauseSelection;
        selectionType: AvailableCharitycauseSelection;
        optionsType: MaybeFindOneCharitycauseOptions;
        schemaType: Query["charitycause"];
    };
    /**
 * Finds many charitycause. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyCharitycausesOptions>(options?: LimitToKnownKeys<Options, FindManyCharitycausesOptions>): Promise<GadgetRecordList<SelectedCharitycauseOrDefault<Options>>>;
        type: "findMany";
        operationName: "charitycauses";
        modelApiIdentifier: "charitycause";
        defaultSelection: typeof DefaultCharitycauseSelection;
        selectionType: AvailableCharitycauseSelection;
        optionsType: FindManyCharitycausesOptions;
        schemaType: Query["charitycause"];
    };
    /**
 * Finds the first matching charitycause. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstCharitycauseOptions>(options?: LimitToKnownKeys<Options, FindFirstCharitycauseOptions>): Promise<GadgetRecord<SelectedCharitycauseOrDefault<Options>>>;
        type: "findFirst";
        operationName: "charitycauses";
        modelApiIdentifier: "charitycause";
        defaultSelection: typeof DefaultCharitycauseSelection;
        selectionType: AvailableCharitycauseSelection;
        optionsType: FindFirstCharitycauseOptions;
        schemaType: Query["charitycause"];
    };
    /**
 * Finds the first matching charitycause. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstCharitycauseOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstCharitycauseOptions>): Promise<GadgetRecord<SelectedCharitycauseOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "charitycauses";
        modelApiIdentifier: "charitycause";
        defaultSelection: typeof DefaultCharitycauseSelection;
        selectionType: AvailableCharitycauseSelection;
        optionsType: MaybeFindFirstCharitycauseOptions;
        schemaType: Query["charitycause"];
    };
    /**
  * Finds one charitycause by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneCharitycauseOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneCharitycauseOptions>): Promise<GadgetRecord<SelectedCharitycauseOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "charitycauses";
        modelApiIdentifier: "charitycause";
        defaultSelection: typeof DefaultCharitycauseSelection;
        selectionType: AvailableCharitycauseSelection;
        optionsType: FindOneCharitycauseOptions;
        schemaType: Query["charitycause"];
    };
    update: typeof updateCharitycause & {
        readonly type: "action";
        readonly operationName: "updateCharitycause";
        readonly namespace: null;
        readonly modelApiIdentifier: "charitycause";
        readonly modelSelectionField: "charitycause";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
        };
        readonly selectionType: AvailableCharitycauseSelection;
        readonly optionsType: UpdateCharitycauseOptions;
        readonly schemaType: Charitycause | null;
        readonly variablesType: {
            id: string;
            charitycause?: UpdateCharitycauseInput | undefined;
        } | (UpdateCharitycauseInput & {
            id: string;
        }) | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
            readonly charitycause: {
                readonly required: false;
                readonly type: "UpdateCharitycauseInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
    create: typeof createCharitycause & {
        readonly type: "action";
        readonly operationName: "createCharitycause";
        readonly namespace: null;
        readonly modelApiIdentifier: "charitycause";
        readonly modelSelectionField: "charitycause";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
        };
        readonly selectionType: AvailableCharitycauseSelection;
        readonly optionsType: CreateCharitycauseOptions;
        readonly schemaType: Charitycause | null;
        readonly variablesType: CreateCharitycauseInput | {
            charitycause?: CreateCharitycauseInput | undefined;
        } | undefined;
        readonly variables: {
            readonly charitycause: {
                readonly required: false;
                readonly type: "CreateCharitycauseInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
    delete: typeof deleteCharitycause & {
        readonly type: "action";
        readonly operationName: "deleteCharitycause";
        readonly namespace: null;
        readonly modelApiIdentifier: "charitycause";
        readonly modelSelectionField: "charitycause";
        readonly isBulk: false;
        readonly defaultSelection: null;
        readonly selectionType: Record<string, never>;
        readonly optionsType: DeleteCharitycauseOptions;
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
        <Options extends DeleteCharitycauseOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteCharitycauseOptions>): Promise<void>;
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
    };
}
export {};
