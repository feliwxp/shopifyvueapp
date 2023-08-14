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
var Campaign_exports = {};
__export(Campaign_exports, {
  CampaignManager: () => CampaignManager,
  DefaultCampaignSelection: () => DefaultCampaignSelection
});
module.exports = __toCommonJS(Campaign_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
const DefaultCampaignSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "type": true,
  "startDate": true,
  "endDate": true,
  "activated": true,
  "settings": true
};
;
;
;
;
;
;
;
;
async function createCampaign(variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "campaign";
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
    "createCampaign",
    DefaultCampaignSelection,
    "campaign",
    "campaign",
    false,
    {
      "campaign": {
        value: newVariables.campaign,
        required: false,
        type: "CreateCampaignInput"
      }
    },
    options,
    null
  );
}
async function updateCampaign(id, variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "campaign";
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
    "updateCampaign",
    DefaultCampaignSelection,
    "campaign",
    "campaign",
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "campaign": {
        value: newVariables.campaign,
        required: false,
        type: "UpdateCampaignInput"
      }
    },
    options,
    null
  );
}
async function deleteCampaign(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "deleteCampaign",
    null,
    "campaign",
    "campaign",
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
class CampaignManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one campaign by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "campaign",
          id,
          DefaultCampaignSelection,
          "campaign",
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "campaign",
        modelApiIdentifier: "campaign",
        defaultSelection: DefaultCampaignSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one campaign by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "campaign",
          id,
          DefaultCampaignSelection,
          "campaign",
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "campaign",
        modelApiIdentifier: "campaign",
        defaultSelection: DefaultCampaignSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds many campaign. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "campaigns",
          DefaultCampaignSelection,
          "campaign",
          options
        );
      },
      {
        type: "findMany",
        operationName: "campaigns",
        modelApiIdentifier: "campaign",
        defaultSelection: DefaultCampaignSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching campaign. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "campaigns",
          DefaultCampaignSelection,
          "campaign",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "campaigns",
        modelApiIdentifier: "campaign",
        defaultSelection: DefaultCampaignSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching campaign. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "campaigns",
          DefaultCampaignSelection,
          "campaign",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "campaigns",
        modelApiIdentifier: "campaign",
        defaultSelection: DefaultCampaignSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one campaign by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await (0, import_api_client_core.findOneByFieldRunner)(
          this,
          "campaigns",
          "id",
          value,
          DefaultCampaignSelection,
          "campaign",
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "campaigns",
        modelApiIdentifier: "campaign",
        defaultSelection: DefaultCampaignSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    this.create = Object.assign(
      createCampaign,
      {
        type: "action",
        operationName: "createCampaign",
        namespace: null,
        modelApiIdentifier: "campaign",
        modelSelectionField: "campaign",
        isBulk: false,
        defaultSelection: DefaultCampaignSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          "campaign": {
            required: false,
            type: "CreateCampaignInput"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: true,
        isCreateOrUpdateAction: true,
        paramOnlyVariables: []
      }
    );
    this.update = Object.assign(
      updateCampaign,
      {
        type: "action",
        operationName: "updateCampaign",
        namespace: null,
        modelApiIdentifier: "campaign",
        modelSelectionField: "campaign",
        isBulk: false,
        defaultSelection: DefaultCampaignSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "campaign": {
            required: false,
            type: "UpdateCampaignInput"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: true,
        isCreateOrUpdateAction: true,
        paramOnlyVariables: []
      }
    );
    this.delete = Object.assign(
      deleteCampaign,
      {
        type: "action",
        operationName: "deleteCampaign",
        namespace: null,
        modelApiIdentifier: "campaign",
        modelSelectionField: "campaign",
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
          "bulkDeleteCampaigns",
          null,
          "campaign",
          "campaigns",
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
        operationName: "bulkDeleteCampaigns",
        namespace: null,
        modelApiIdentifier: "campaign",
        modelSelectionField: "campaigns",
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
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CampaignManager,
  DefaultCampaignSelection
});
//# sourceMappingURL=Campaign.js.map
