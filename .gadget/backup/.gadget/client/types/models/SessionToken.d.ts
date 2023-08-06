import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, SessionToken, SessionTokenSort, SessionTokenFilter, AvailableSessionTokenSelection, UpdateSessionTokenInput, CreateSessionTokenInput } from "../types.js";
export declare const DefaultSessionTokenSelection: {
    readonly id: true;
    readonly __typename: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly token: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "sessionToken". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedSessionTokenOrDefault<Options extends Selectable<AvailableSessionTokenSelection>> = DeepFilterNever<Select<SessionToken, DefaultSelection<AvailableSessionTokenSelection, Options, typeof DefaultSessionTokenSelection>>>;
/** Options that can be passed to the `SessionTokenManager#findOne` method */
export interface FindOneSessionTokenOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableSessionTokenSelection;
}
/** Options that can be passed to the `SessionTokenManager#maybeFindOne` method */
export interface MaybeFindOneSessionTokenOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableSessionTokenSelection;
}
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
}
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
}
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
}
export interface DeleteSessionTokenOptions {
}
export interface UpdateSessionTokenOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableSessionTokenSelection;
}
export interface CreateSessionTokenOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableSessionTokenSelection;
}
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteSessionToken<Options extends DeleteSessionTokenOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteSessionTokenOptions>): Promise<void extends void ? void : GadgetRecord<SelectedSessionTokenOrDefault<Options>>>;
type updateSessionTokenVariables = UpdateSessionTokenInput;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateSessionToken<Options extends UpdateSessionTokenOptions>(id: string, variables: updateSessionTokenVariables, options?: LimitToKnownKeys<Options, UpdateSessionTokenOptions>): Promise<SelectedSessionTokenOrDefault<Options> extends void ? void : GadgetRecord<SelectedSessionTokenOrDefault<Options>>>;
declare function updateSessionToken<Options extends UpdateSessionTokenOptions>(id: string, variables: {
    sessionToken?: UpdateSessionTokenInput;
}, options?: LimitToKnownKeys<Options, UpdateSessionTokenOptions>): Promise<SelectedSessionTokenOrDefault<Options> extends void ? void : GadgetRecord<SelectedSessionTokenOrDefault<Options>>>;
type createSessionTokenVariables = CreateSessionTokenInput;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createSessionToken<Options extends CreateSessionTokenOptions>(variables: createSessionTokenVariables, options?: LimitToKnownKeys<Options, CreateSessionTokenOptions>): Promise<SelectedSessionTokenOrDefault<Options> extends void ? void : GadgetRecord<SelectedSessionTokenOrDefault<Options>>>;
declare function createSessionToken<Options extends CreateSessionTokenOptions>(variables: {
    sessionToken?: CreateSessionTokenInput;
}, options?: LimitToKnownKeys<Options, CreateSessionTokenOptions>): Promise<SelectedSessionTokenOrDefault<Options> extends void ? void : GadgetRecord<SelectedSessionTokenOrDefault<Options>>>;
/** All the actions available at the collection level and record level for "sessionToken" */
export declare class SessionTokenManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one sessionToken by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneSessionTokenOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneSessionTokenOptions>): Promise<GadgetRecord<SelectedSessionTokenOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "sessionToken";
        modelApiIdentifier: "sessionToken";
        defaultSelection: typeof DefaultSessionTokenSelection;
        selectionType: AvailableSessionTokenSelection;
        optionsType: FindOneSessionTokenOptions;
        schemaType: Query["sessionToken"];
    };
    /**
 * Finds one sessionToken by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneSessionTokenOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneSessionTokenOptions>): Promise<GadgetRecord<SelectedSessionTokenOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "sessionToken";
        modelApiIdentifier: "sessionToken";
        defaultSelection: typeof DefaultSessionTokenSelection;
        selectionType: AvailableSessionTokenSelection;
        optionsType: MaybeFindOneSessionTokenOptions;
        schemaType: Query["sessionToken"];
    };
    /**
 * Finds many sessionToken. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManySessionTokensOptions>(options?: LimitToKnownKeys<Options, FindManySessionTokensOptions>): Promise<GadgetRecordList<SelectedSessionTokenOrDefault<Options>>>;
        type: "findMany";
        operationName: "sessionTokens";
        modelApiIdentifier: "sessionToken";
        defaultSelection: typeof DefaultSessionTokenSelection;
        selectionType: AvailableSessionTokenSelection;
        optionsType: FindManySessionTokensOptions;
        schemaType: Query["sessionToken"];
    };
    /**
 * Finds the first matching sessionToken. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstSessionTokenOptions>(options?: LimitToKnownKeys<Options, FindFirstSessionTokenOptions>): Promise<GadgetRecord<SelectedSessionTokenOrDefault<Options>>>;
        type: "findFirst";
        operationName: "sessionTokens";
        modelApiIdentifier: "sessionToken";
        defaultSelection: typeof DefaultSessionTokenSelection;
        selectionType: AvailableSessionTokenSelection;
        optionsType: FindFirstSessionTokenOptions;
        schemaType: Query["sessionToken"];
    };
    /**
 * Finds the first matching sessionToken. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstSessionTokenOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstSessionTokenOptions>): Promise<GadgetRecord<SelectedSessionTokenOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "sessionTokens";
        modelApiIdentifier: "sessionToken";
        defaultSelection: typeof DefaultSessionTokenSelection;
        selectionType: AvailableSessionTokenSelection;
        optionsType: MaybeFindFirstSessionTokenOptions;
        schemaType: Query["sessionToken"];
    };
    /**
  * Finds one sessionToken by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneSessionTokenOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneSessionTokenOptions>): Promise<GadgetRecord<SelectedSessionTokenOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "sessionTokens";
        modelApiIdentifier: "sessionToken";
        defaultSelection: typeof DefaultSessionTokenSelection;
        selectionType: AvailableSessionTokenSelection;
        optionsType: FindOneSessionTokenOptions;
        schemaType: Query["sessionToken"];
    };
    delete: typeof deleteSessionToken & {
        readonly type: "action";
        readonly operationName: "deleteSessionToken";
        readonly namespace: null;
        readonly modelApiIdentifier: "sessionToken";
        readonly modelSelectionField: "sessionToken";
        readonly isBulk: false;
        readonly defaultSelection: null;
        readonly selectionType: Record<string, never>;
        readonly optionsType: DeleteSessionTokenOptions;
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
        <Options extends DeleteSessionTokenOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteSessionTokenOptions>): Promise<void>;
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
    };
    update: typeof updateSessionToken & {
        readonly type: "action";
        readonly operationName: "updateSessionToken";
        readonly namespace: null;
        readonly modelApiIdentifier: "sessionToken";
        readonly modelSelectionField: "sessionToken";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly token: true;
        };
        readonly selectionType: AvailableSessionTokenSelection;
        readonly optionsType: UpdateSessionTokenOptions;
        readonly schemaType: SessionToken | null;
        readonly variablesType: {
            id: string;
            sessionToken?: UpdateSessionTokenInput | undefined;
        } | (UpdateSessionTokenInput & {
            id: string;
        }) | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
            readonly sessionToken: {
                readonly required: false;
                readonly type: "UpdateSessionTokenInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
    create: typeof createSessionToken & {
        readonly type: "action";
        readonly operationName: "createSessionToken";
        readonly namespace: null;
        readonly modelApiIdentifier: "sessionToken";
        readonly modelSelectionField: "sessionToken";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly token: true;
        };
        readonly selectionType: AvailableSessionTokenSelection;
        readonly optionsType: CreateSessionTokenOptions;
        readonly schemaType: SessionToken | null;
        readonly variablesType: CreateSessionTokenInput | {
            sessionToken?: CreateSessionTokenInput | undefined;
        } | undefined;
        readonly variables: {
            readonly sessionToken: {
                readonly required: false;
                readonly type: "CreateSessionTokenInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
}
export {};
