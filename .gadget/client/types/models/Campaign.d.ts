import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, Campaign, CampaignSort, CampaignFilter, AvailableCampaignSelection, CreateCampaignInput, UpdateCampaignInput } from "../types.js";
export declare const DefaultCampaignSelection: {
    readonly id: true;
    readonly __typename: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly type: true;
    readonly startDate: true;
    readonly endDate: true;
    readonly activated: true;
    readonly settings: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "campaign". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedCampaignOrDefault<Options extends Selectable<AvailableCampaignSelection>> = DeepFilterNever<Select<Campaign, DefaultSelection<AvailableCampaignSelection, Options, typeof DefaultCampaignSelection>>>;
/** Options that can be passed to the `CampaignManager#findOne` method */
export interface FindOneCampaignOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableCampaignSelection;
}
/** Options that can be passed to the `CampaignManager#maybeFindOne` method */
export interface MaybeFindOneCampaignOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableCampaignSelection;
}
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
}
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
}
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
}
export interface CreateCampaignOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableCampaignSelection;
}
export interface UpdateCampaignOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableCampaignSelection;
}
export interface DeleteCampaignOptions {
}
type createCampaignVariables = CreateCampaignInput;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createCampaign<Options extends CreateCampaignOptions>(variables: createCampaignVariables, options?: LimitToKnownKeys<Options, CreateCampaignOptions>): Promise<SelectedCampaignOrDefault<Options> extends void ? void : GadgetRecord<SelectedCampaignOrDefault<Options>>>;
declare function createCampaign<Options extends CreateCampaignOptions>(variables: {
    campaign?: CreateCampaignInput;
}, options?: LimitToKnownKeys<Options, CreateCampaignOptions>): Promise<SelectedCampaignOrDefault<Options> extends void ? void : GadgetRecord<SelectedCampaignOrDefault<Options>>>;
type updateCampaignVariables = UpdateCampaignInput;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateCampaign<Options extends UpdateCampaignOptions>(id: string, variables: updateCampaignVariables, options?: LimitToKnownKeys<Options, UpdateCampaignOptions>): Promise<SelectedCampaignOrDefault<Options> extends void ? void : GadgetRecord<SelectedCampaignOrDefault<Options>>>;
declare function updateCampaign<Options extends UpdateCampaignOptions>(id: string, variables: {
    campaign?: UpdateCampaignInput;
}, options?: LimitToKnownKeys<Options, UpdateCampaignOptions>): Promise<SelectedCampaignOrDefault<Options> extends void ? void : GadgetRecord<SelectedCampaignOrDefault<Options>>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteCampaign<Options extends DeleteCampaignOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteCampaignOptions>): Promise<void extends void ? void : GadgetRecord<SelectedCampaignOrDefault<Options>>>;
/** All the actions available at the collection level and record level for "campaign" */
export declare class CampaignManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one campaign by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneCampaignOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneCampaignOptions>): Promise<GadgetRecord<SelectedCampaignOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "campaign";
        modelApiIdentifier: "campaign";
        defaultSelection: typeof DefaultCampaignSelection;
        selectionType: AvailableCampaignSelection;
        optionsType: FindOneCampaignOptions;
        schemaType: Query["campaign"];
    };
    /**
 * Finds one campaign by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneCampaignOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneCampaignOptions>): Promise<GadgetRecord<SelectedCampaignOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "campaign";
        modelApiIdentifier: "campaign";
        defaultSelection: typeof DefaultCampaignSelection;
        selectionType: AvailableCampaignSelection;
        optionsType: MaybeFindOneCampaignOptions;
        schemaType: Query["campaign"];
    };
    /**
 * Finds many campaign. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyCampaignsOptions>(options?: LimitToKnownKeys<Options, FindManyCampaignsOptions>): Promise<GadgetRecordList<SelectedCampaignOrDefault<Options>>>;
        type: "findMany";
        operationName: "campaigns";
        modelApiIdentifier: "campaign";
        defaultSelection: typeof DefaultCampaignSelection;
        selectionType: AvailableCampaignSelection;
        optionsType: FindManyCampaignsOptions;
        schemaType: Query["campaign"];
    };
    /**
 * Finds the first matching campaign. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstCampaignOptions>(options?: LimitToKnownKeys<Options, FindFirstCampaignOptions>): Promise<GadgetRecord<SelectedCampaignOrDefault<Options>>>;
        type: "findFirst";
        operationName: "campaigns";
        modelApiIdentifier: "campaign";
        defaultSelection: typeof DefaultCampaignSelection;
        selectionType: AvailableCampaignSelection;
        optionsType: FindFirstCampaignOptions;
        schemaType: Query["campaign"];
    };
    /**
 * Finds the first matching campaign. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstCampaignOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstCampaignOptions>): Promise<GadgetRecord<SelectedCampaignOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "campaigns";
        modelApiIdentifier: "campaign";
        defaultSelection: typeof DefaultCampaignSelection;
        selectionType: AvailableCampaignSelection;
        optionsType: MaybeFindFirstCampaignOptions;
        schemaType: Query["campaign"];
    };
    /**
  * Finds one campaign by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneCampaignOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneCampaignOptions>): Promise<GadgetRecord<SelectedCampaignOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "campaigns";
        modelApiIdentifier: "campaign";
        defaultSelection: typeof DefaultCampaignSelection;
        selectionType: AvailableCampaignSelection;
        optionsType: FindOneCampaignOptions;
        schemaType: Query["campaign"];
    };
    create: typeof createCampaign & {
        readonly type: "action";
        readonly operationName: "createCampaign";
        readonly namespace: null;
        readonly modelApiIdentifier: "campaign";
        readonly modelSelectionField: "campaign";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly type: true;
            readonly startDate: true;
            readonly endDate: true;
            readonly activated: true;
            readonly settings: true;
        };
        readonly selectionType: AvailableCampaignSelection;
        readonly optionsType: CreateCampaignOptions;
        readonly schemaType: Campaign | null;
        readonly variablesType: CreateCampaignInput | {
            campaign?: CreateCampaignInput | undefined;
        } | undefined;
        readonly variables: {
            readonly campaign: {
                readonly required: false;
                readonly type: "CreateCampaignInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
    update: typeof updateCampaign & {
        readonly type: "action";
        readonly operationName: "updateCampaign";
        readonly namespace: null;
        readonly modelApiIdentifier: "campaign";
        readonly modelSelectionField: "campaign";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly type: true;
            readonly startDate: true;
            readonly endDate: true;
            readonly activated: true;
            readonly settings: true;
        };
        readonly selectionType: AvailableCampaignSelection;
        readonly optionsType: UpdateCampaignOptions;
        readonly schemaType: Campaign | null;
        readonly variablesType: {
            id: string;
            campaign?: UpdateCampaignInput | undefined;
        } | (UpdateCampaignInput & {
            id: string;
        }) | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
            readonly campaign: {
                readonly required: false;
                readonly type: "UpdateCampaignInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
    delete: typeof deleteCampaign & {
        readonly type: "action";
        readonly operationName: "deleteCampaign";
        readonly namespace: null;
        readonly modelApiIdentifier: "campaign";
        readonly modelSelectionField: "campaign";
        readonly isBulk: false;
        readonly defaultSelection: null;
        readonly selectionType: Record<string, never>;
        readonly optionsType: DeleteCampaignOptions;
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
        <Options extends DeleteCampaignOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteCampaignOptions>): Promise<void>;
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
    };
}
export {};
