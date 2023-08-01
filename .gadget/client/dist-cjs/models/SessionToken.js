"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var SessionToken_exports = {};
__export(SessionToken_exports, {
  DefaultSessionTokenSelection: () => DefaultSessionTokenSelection,
  SessionTokenManager: () => SessionTokenManager
});
module.exports = __toCommonJS(SessionToken_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
const DefaultSessionTokenSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "token": true
};
;
;
;
;
;
;
;
;
async function deleteSessionToken(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "deleteSessionToken",
    null,
    "sessionToken",
    "sessionToken",
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      }
    },
    options,
    null
  );
}
async function updateSessionToken(id, variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "sessionToken";
  if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
    newVariables = variables;
  } else {
    newVariables = {
      [modelApiIdentifier]: {}
    };
    for (const [key, value] of Object.entries(variables)) {
      if (paramOnlyVariables.includes(key)) {
        newVariables[key] = value;
      } else {
        newVariables[modelApiIdentifier][key] = value;
      }
    }
  }
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updateSessionToken",
    DefaultSessionTokenSelection,
    "sessionToken",
    "sessionToken",
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "sessionToken": {
        value: newVariables.sessionToken,
        required: false,
        type: "UpdateSessionTokenInput"
      }
    },
    options,
    null
  );
}
async function createSessionToken(variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "sessionToken";
  if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
    newVariables = variables;
  } else {
    newVariables = {
      [modelApiIdentifier]: {}
    };
    for (const [key, value] of Object.entries(variables)) {
      if (paramOnlyVariables.includes(key)) {
        newVariables[key] = value;
      } else {
        newVariables[modelApiIdentifier][key] = value;
      }
    }
  }
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createSessionToken",
    DefaultSessionTokenSelection,
    "sessionToken",
    "sessionToken",
    false,
    {
      "sessionToken": {
        value: newVariables.sessionToken,
        required: false,
        type: "CreateSessionTokenInput"
      }
    },
    options,
    null
  );
}
class SessionTokenManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one sessionToken by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "sessionToken",
          id,
          DefaultSessionTokenSelection,
          "sessionToken",
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "sessionToken",
        modelApiIdentifier: "sessionToken",
        defaultSelection: DefaultSessionTokenSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one sessionToken by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "sessionToken",
          id,
          DefaultSessionTokenSelection,
          "sessionToken",
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "sessionToken",
        modelApiIdentifier: "sessionToken",
        defaultSelection: DefaultSessionTokenSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds many sessionToken. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "sessionTokens",
          DefaultSessionTokenSelection,
          "sessionToken",
          options
        );
      },
      {
        type: "findMany",
        operationName: "sessionTokens",
        modelApiIdentifier: "sessionToken",
        defaultSelection: DefaultSessionTokenSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching sessionToken. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "sessionTokens",
          DefaultSessionTokenSelection,
          "sessionToken",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "sessionTokens",
        modelApiIdentifier: "sessionToken",
        defaultSelection: DefaultSessionTokenSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching sessionToken. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "sessionTokens",
          DefaultSessionTokenSelection,
          "sessionToken",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "sessionTokens",
        modelApiIdentifier: "sessionToken",
        defaultSelection: DefaultSessionTokenSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one sessionToken by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await (0, import_api_client_core.findOneByFieldRunner)(
          this,
          "sessionTokens",
          "id",
          value,
          DefaultSessionTokenSelection,
          "sessionToken",
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "sessionTokens",
        modelApiIdentifier: "sessionToken",
        defaultSelection: DefaultSessionTokenSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    this.delete = Object.assign(
      deleteSessionToken,
      {
        type: "action",
        operationName: "deleteSessionToken",
        namespace: null,
        modelApiIdentifier: "sessionToken",
        modelSelectionField: "sessionToken",
        isBulk: false,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: false,
        isCreateOrUpdateAction: false,
        paramOnlyVariables: []
      }
    );
    /**
    * Executes the bulkDelete action on all records specified by `ids`. Deletes the records on the server.
    */
    this.bulkDelete = Object.assign(
      async (ids, options) => {
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkDeleteSessionTokens",
          null,
          "sessionToken",
          "sessionTokens",
          true,
          {
            ids: {
              value: ids,
              required: true,
              type: "[GadgetID!]"
            }
          },
          options,
          null
        );
      },
      {
        type: "action",
        operationName: "bulkDeleteSessionTokens",
        namespace: null,
        modelApiIdentifier: "sessionToken",
        modelSelectionField: "sessionTokens",
        isBulk: true,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          ids: {
            required: true,
            type: "[GadgetID!]"
          }
        }
      }
    );
    this.update = Object.assign(
      updateSessionToken,
      {
        type: "action",
        operationName: "updateSessionToken",
        namespace: null,
        modelApiIdentifier: "sessionToken",
        modelSelectionField: "sessionToken",
        isBulk: false,
        defaultSelection: DefaultSessionTokenSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "sessionToken": {
            required: false,
            type: "UpdateSessionTokenInput"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: true,
        isCreateOrUpdateAction: true,
        paramOnlyVariables: []
      }
    );
    this.create = Object.assign(
      createSessionToken,
      {
        type: "action",
        operationName: "createSessionToken",
        namespace: null,
        modelApiIdentifier: "sessionToken",
        modelSelectionField: "sessionToken",
        isBulk: false,
        defaultSelection: DefaultSessionTokenSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          "sessionToken": {
            required: false,
            type: "CreateSessionTokenInput"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: true,
        isCreateOrUpdateAction: true,
        paramOnlyVariables: []
      }
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultSessionTokenSelection,
  SessionTokenManager
});
//# sourceMappingURL=SessionToken.js.map
