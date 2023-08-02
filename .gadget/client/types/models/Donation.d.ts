import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, Donation, DonationSort, DonationFilter, AvailableDonationSelection, CreateDonationInput, UpdateDonationInput } from "../types.js";
export declare const DefaultDonationSelection: {
    readonly id: true;
    readonly __typename: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly amount: true;
    readonly type: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "donation". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedDonationOrDefault<Options extends Selectable<AvailableDonationSelection>> = DeepFilterNever<Select<Donation, DefaultSelection<AvailableDonationSelection, Options, typeof DefaultDonationSelection>>>;
/** Options that can be passed to the `DonationManager#findOne` method */
export interface FindOneDonationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableDonationSelection;
}
/** Options that can be passed to the `DonationManager#maybeFindOne` method */
export interface MaybeFindOneDonationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableDonationSelection;
}
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
}
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
}
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
}
export interface DeleteDonationOptions {
}
export interface CreateDonationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableDonationSelection;
}
export interface UpdateDonationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableDonationSelection;
}
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteDonation<Options extends DeleteDonationOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteDonationOptions>): Promise<void extends void ? void : GadgetRecord<SelectedDonationOrDefault<Options>>>;
type createDonationVariables = CreateDonationInput;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createDonation<Options extends CreateDonationOptions>(variables: createDonationVariables, options?: LimitToKnownKeys<Options, CreateDonationOptions>): Promise<SelectedDonationOrDefault<Options> extends void ? void : GadgetRecord<SelectedDonationOrDefault<Options>>>;
declare function createDonation<Options extends CreateDonationOptions>(variables: {
    donation?: CreateDonationInput;
}, options?: LimitToKnownKeys<Options, CreateDonationOptions>): Promise<SelectedDonationOrDefault<Options> extends void ? void : GadgetRecord<SelectedDonationOrDefault<Options>>>;
type updateDonationVariables = UpdateDonationInput;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateDonation<Options extends UpdateDonationOptions>(id: string, variables: updateDonationVariables, options?: LimitToKnownKeys<Options, UpdateDonationOptions>): Promise<SelectedDonationOrDefault<Options> extends void ? void : GadgetRecord<SelectedDonationOrDefault<Options>>>;
declare function updateDonation<Options extends UpdateDonationOptions>(id: string, variables: {
    donation?: UpdateDonationInput;
}, options?: LimitToKnownKeys<Options, UpdateDonationOptions>): Promise<SelectedDonationOrDefault<Options> extends void ? void : GadgetRecord<SelectedDonationOrDefault<Options>>>;
/** All the actions available at the collection level and record level for "donation" */
export declare class DonationManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one donation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneDonationOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneDonationOptions>): Promise<GadgetRecord<SelectedDonationOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "donation";
        modelApiIdentifier: "donation";
        defaultSelection: typeof DefaultDonationSelection;
        selectionType: AvailableDonationSelection;
        optionsType: FindOneDonationOptions;
        schemaType: Query["donation"];
    };
    /**
 * Finds one donation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneDonationOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneDonationOptions>): Promise<GadgetRecord<SelectedDonationOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "donation";
        modelApiIdentifier: "donation";
        defaultSelection: typeof DefaultDonationSelection;
        selectionType: AvailableDonationSelection;
        optionsType: MaybeFindOneDonationOptions;
        schemaType: Query["donation"];
    };
    /**
 * Finds many donation. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyDonationsOptions>(options?: LimitToKnownKeys<Options, FindManyDonationsOptions>): Promise<GadgetRecordList<SelectedDonationOrDefault<Options>>>;
        type: "findMany";
        operationName: "donations";
        modelApiIdentifier: "donation";
        defaultSelection: typeof DefaultDonationSelection;
        selectionType: AvailableDonationSelection;
        optionsType: FindManyDonationsOptions;
        schemaType: Query["donation"];
    };
    /**
 * Finds the first matching donation. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstDonationOptions>(options?: LimitToKnownKeys<Options, FindFirstDonationOptions>): Promise<GadgetRecord<SelectedDonationOrDefault<Options>>>;
        type: "findFirst";
        operationName: "donations";
        modelApiIdentifier: "donation";
        defaultSelection: typeof DefaultDonationSelection;
        selectionType: AvailableDonationSelection;
        optionsType: FindFirstDonationOptions;
        schemaType: Query["donation"];
    };
    /**
 * Finds the first matching donation. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstDonationOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstDonationOptions>): Promise<GadgetRecord<SelectedDonationOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "donations";
        modelApiIdentifier: "donation";
        defaultSelection: typeof DefaultDonationSelection;
        selectionType: AvailableDonationSelection;
        optionsType: MaybeFindFirstDonationOptions;
        schemaType: Query["donation"];
    };
    /**
  * Finds one donation by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneDonationOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneDonationOptions>): Promise<GadgetRecord<SelectedDonationOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "donations";
        modelApiIdentifier: "donation";
        defaultSelection: typeof DefaultDonationSelection;
        selectionType: AvailableDonationSelection;
        optionsType: FindOneDonationOptions;
        schemaType: Query["donation"];
    };
    delete: typeof deleteDonation & {
        readonly type: "action";
        readonly operationName: "deleteDonation";
        readonly namespace: null;
        readonly modelApiIdentifier: "donation";
        readonly modelSelectionField: "donation";
        readonly isBulk: false;
        readonly defaultSelection: null;
        readonly selectionType: Record<string, never>;
        readonly optionsType: DeleteDonationOptions;
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
        <Options extends DeleteDonationOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteDonationOptions>): Promise<void>;
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
    };
    create: typeof createDonation & {
        readonly type: "action";
        readonly operationName: "createDonation";
        readonly namespace: null;
        readonly modelApiIdentifier: "donation";
        readonly modelSelectionField: "donation";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly amount: true;
            readonly type: true;
        };
        readonly selectionType: AvailableDonationSelection;
        readonly optionsType: CreateDonationOptions;
        readonly schemaType: Donation | null;
        readonly variablesType: CreateDonationInput | {
            donation?: CreateDonationInput | undefined;
        } | undefined;
        readonly variables: {
            readonly donation: {
                readonly required: false;
                readonly type: "CreateDonationInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
    update: typeof updateDonation & {
        readonly type: "action";
        readonly operationName: "updateDonation";
        readonly namespace: null;
        readonly modelApiIdentifier: "donation";
        readonly modelSelectionField: "donation";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly amount: true;
            readonly type: true;
        };
        readonly selectionType: AvailableDonationSelection;
        readonly optionsType: UpdateDonationOptions;
        readonly schemaType: Donation | null;
        readonly variablesType: {
            id: string;
            donation?: UpdateDonationInput | undefined;
        } | (UpdateDonationInput & {
            id: string;
        }) | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
            readonly donation: {
                readonly required: false;
                readonly type: "UpdateDonationInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
}
export {};
