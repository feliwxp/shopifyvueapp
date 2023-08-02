import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, Charity, CharitySort, CharityFilter, AvailableCharitySelection, CreateCharityInput, UpdateCharityInput } from "../types.js";
export declare const DefaultCharitySelection: {
    readonly id: true;
    readonly __typename: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly name: true;
    readonly website_url: true;
    readonly description: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "charity". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedCharityOrDefault<Options extends Selectable<AvailableCharitySelection>> = DeepFilterNever<Select<Charity, DefaultSelection<AvailableCharitySelection, Options, typeof DefaultCharitySelection>>>;
/** Options that can be passed to the `CharityManager#findOne` method */
export interface FindOneCharityOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableCharitySelection;
}
/** Options that can be passed to the `CharityManager#maybeFindOne` method */
export interface MaybeFindOneCharityOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableCharitySelection;
}
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
}
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
}
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
}
export interface CreateCharityOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableCharitySelection;
}
export interface DeleteCharityOptions {
}
export interface UpdateCharityOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableCharitySelection;
}
type createCharityVariables = CreateCharityInput;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createCharity<Options extends CreateCharityOptions>(variables: createCharityVariables, options?: LimitToKnownKeys<Options, CreateCharityOptions>): Promise<SelectedCharityOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharityOrDefault<Options>>>;
declare function createCharity<Options extends CreateCharityOptions>(variables: {
    charity?: CreateCharityInput;
}, options?: LimitToKnownKeys<Options, CreateCharityOptions>): Promise<SelectedCharityOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharityOrDefault<Options>>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteCharity<Options extends DeleteCharityOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteCharityOptions>): Promise<void extends void ? void : GadgetRecord<SelectedCharityOrDefault<Options>>>;
type updateCharityVariables = UpdateCharityInput;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateCharity<Options extends UpdateCharityOptions>(id: string, variables: updateCharityVariables, options?: LimitToKnownKeys<Options, UpdateCharityOptions>): Promise<SelectedCharityOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharityOrDefault<Options>>>;
declare function updateCharity<Options extends UpdateCharityOptions>(id: string, variables: {
    charity?: UpdateCharityInput;
}, options?: LimitToKnownKeys<Options, UpdateCharityOptions>): Promise<SelectedCharityOrDefault<Options> extends void ? void : GadgetRecord<SelectedCharityOrDefault<Options>>>;
/** All the actions available at the collection level and record level for "charity" */
export declare class CharityManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one charity by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneCharityOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneCharityOptions>): Promise<GadgetRecord<SelectedCharityOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "charity";
        modelApiIdentifier: "charity";
        defaultSelection: typeof DefaultCharitySelection;
        selectionType: AvailableCharitySelection;
        optionsType: FindOneCharityOptions;
        schemaType: Query["charity"];
    };
    /**
 * Finds one charity by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneCharityOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneCharityOptions>): Promise<GadgetRecord<SelectedCharityOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "charity";
        modelApiIdentifier: "charity";
        defaultSelection: typeof DefaultCharitySelection;
        selectionType: AvailableCharitySelection;
        optionsType: MaybeFindOneCharityOptions;
        schemaType: Query["charity"];
    };
    /**
 * Finds many charity. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyCharitiesOptions>(options?: LimitToKnownKeys<Options, FindManyCharitiesOptions>): Promise<GadgetRecordList<SelectedCharityOrDefault<Options>>>;
        type: "findMany";
        operationName: "charities";
        modelApiIdentifier: "charity";
        defaultSelection: typeof DefaultCharitySelection;
        selectionType: AvailableCharitySelection;
        optionsType: FindManyCharitiesOptions;
        schemaType: Query["charity"];
    };
    /**
 * Finds the first matching charity. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstCharityOptions>(options?: LimitToKnownKeys<Options, FindFirstCharityOptions>): Promise<GadgetRecord<SelectedCharityOrDefault<Options>>>;
        type: "findFirst";
        operationName: "charities";
        modelApiIdentifier: "charity";
        defaultSelection: typeof DefaultCharitySelection;
        selectionType: AvailableCharitySelection;
        optionsType: FindFirstCharityOptions;
        schemaType: Query["charity"];
    };
    /**
 * Finds the first matching charity. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstCharityOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstCharityOptions>): Promise<GadgetRecord<SelectedCharityOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "charities";
        modelApiIdentifier: "charity";
        defaultSelection: typeof DefaultCharitySelection;
        selectionType: AvailableCharitySelection;
        optionsType: MaybeFindFirstCharityOptions;
        schemaType: Query["charity"];
    };
    /**
  * Finds one charity by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneCharityOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneCharityOptions>): Promise<GadgetRecord<SelectedCharityOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "charities";
        modelApiIdentifier: "charity";
        defaultSelection: typeof DefaultCharitySelection;
        selectionType: AvailableCharitySelection;
        optionsType: FindOneCharityOptions;
        schemaType: Query["charity"];
    };
    create: typeof createCharity & {
        readonly type: "action";
        readonly operationName: "createCharity";
        readonly namespace: null;
        readonly modelApiIdentifier: "charity";
        readonly modelSelectionField: "charity";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly name: true;
            readonly website_url: true;
            readonly description: true;
        };
        readonly selectionType: AvailableCharitySelection;
        readonly optionsType: CreateCharityOptions;
        readonly schemaType: Charity | null;
        readonly variablesType: CreateCharityInput | {
            charity?: CreateCharityInput | undefined;
        } | undefined;
        readonly variables: {
            readonly charity: {
                readonly required: false;
                readonly type: "CreateCharityInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
    delete: typeof deleteCharity & {
        readonly type: "action";
        readonly operationName: "deleteCharity";
        readonly namespace: null;
        readonly modelApiIdentifier: "charity";
        readonly modelSelectionField: "charity";
        readonly isBulk: false;
        readonly defaultSelection: null;
        readonly selectionType: Record<string, never>;
        readonly optionsType: DeleteCharityOptions;
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
        <Options extends DeleteCharityOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteCharityOptions>): Promise<void>;
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
    };
    update: typeof updateCharity & {
        readonly type: "action";
        readonly operationName: "updateCharity";
        readonly namespace: null;
        readonly modelApiIdentifier: "charity";
        readonly modelSelectionField: "charity";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly name: true;
            readonly website_url: true;
            readonly description: true;
        };
        readonly selectionType: AvailableCharitySelection;
        readonly optionsType: UpdateCharityOptions;
        readonly schemaType: Charity | null;
        readonly variablesType: {
            id: string;
            charity?: UpdateCharityInput | undefined;
        } | (UpdateCharityInput & {
            id: string;
        }) | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
            readonly charity: {
                readonly required: false;
                readonly type: "UpdateCharityInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
}
export {};
