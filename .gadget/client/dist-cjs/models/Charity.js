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
var Charity_exports = {};
__export(Charity_exports, {
  CharityManager: () => CharityManager,
  DefaultCharitySelection: () => DefaultCharitySelection
});
module.exports = __toCommonJS(Charity_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
const DefaultCharitySelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "name": true,
  "website_url": true,
  "description": true
};
;
;
;
;
;
;
;
;
async function createCharity(variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "charity";
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
    "createCharity",
    DefaultCharitySelection,
    "charity",
    "charity",
    false,
    {
      "charity": {
        value: newVariables.charity,
        required: false,
        type: "CreateCharityInput"
      }
    },
    options,
    null
  );
}
async function deleteCharity(id, options) {
  return await (0, import_api_client_core.actionRunner)(
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
        type: "GadgetID"
      }
    },
    options,
    null
  );
}
async function updateCharity(id, variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "charity";
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
    "updateCharity",
    DefaultCharitySelection,
    "charity",
    "charity",
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "charity": {
        value: newVariables.charity,
        required: false,
        type: "UpdateCharityInput"
      }
    },
    options,
    null
  );
}
class CharityManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one charity by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one charity by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds many charity. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching charity. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "charities",
          DefaultCharitySelection,
          "charity",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "charities",
        modelApiIdentifier: "charity",
        defaultSelection: DefaultCharitySelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching charity. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "charities",
          DefaultCharitySelection,
          "charity",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "charities",
        modelApiIdentifier: "charity",
        defaultSelection: DefaultCharitySelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one charity by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await (0, import_api_client_core.findOneByFieldRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    this.create = Object.assign(
      createCharity,
      {
        type: "action",
        operationName: "createCharity",
        namespace: null,
        modelApiIdentifier: "charity",
        modelSelectionField: "charity",
        isBulk: false,
        defaultSelection: DefaultCharitySelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          "charity": {
            required: false,
            type: "CreateCharityInput"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: true,
        isCreateOrUpdateAction: true,
        paramOnlyVariables: []
      }
    );
    this.delete = Object.assign(
      deleteCharity,
      {
        type: "action",
        operationName: "deleteCharity",
        namespace: null,
        modelApiIdentifier: "charity",
        modelSelectionField: "charity",
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
          "bulkDeleteCharities",
          null,
          "charity",
          "charities",
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
        operationName: "bulkDeleteCharities",
        namespace: null,
        modelApiIdentifier: "charity",
        modelSelectionField: "charities",
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
      updateCharity,
      {
        type: "action",
        operationName: "updateCharity",
        namespace: null,
        modelApiIdentifier: "charity",
        modelSelectionField: "charity",
        isBulk: false,
        defaultSelection: DefaultCharitySelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "charity": {
            required: false,
            type: "UpdateCharityInput"
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
  CharityManager,
  DefaultCharitySelection
});
//# sourceMappingURL=Charity.js.map
