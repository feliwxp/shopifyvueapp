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
var Donation_exports = {};
__export(Donation_exports, {
  DefaultDonationSelection: () => DefaultDonationSelection,
  DonationManager: () => DonationManager
});
module.exports = __toCommonJS(Donation_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
const DefaultDonationSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "amount": true,
  "type": true
};
;
;
;
;
;
;
;
;
async function deleteDonation(id, options) {
  return await (0, import_api_client_core.actionRunner)(
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
        type: "GadgetID"
      }
    },
    options,
    null
  );
}
async function createDonation(variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "donation";
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
    "createDonation",
    DefaultDonationSelection,
    "donation",
    "donation",
    false,
    {
      "donation": {
        value: newVariables.donation,
        required: false,
        type: "CreateDonationInput"
      }
    },
    options,
    null
  );
}
async function updateDonation(id, variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "donation";
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
    "updateDonation",
    DefaultDonationSelection,
    "donation",
    "donation",
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "donation": {
        value: newVariables.donation,
        required: false,
        type: "UpdateDonationInput"
      }
    },
    options,
    null
  );
}
class DonationManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one donation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one donation by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds many donation. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching donation. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "donations",
          DefaultDonationSelection,
          "donation",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "donations",
        modelApiIdentifier: "donation",
        defaultSelection: DefaultDonationSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching donation. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "donations",
          DefaultDonationSelection,
          "donation",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "donations",
        modelApiIdentifier: "donation",
        defaultSelection: DefaultDonationSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one donation by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await (0, import_api_client_core.findOneByFieldRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    this.delete = Object.assign(
      deleteDonation,
      {
        type: "action",
        operationName: "deleteDonation",
        namespace: null,
        modelApiIdentifier: "donation",
        modelSelectionField: "donation",
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
          "bulkDeleteDonations",
          null,
          "donation",
          "donations",
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
        operationName: "bulkDeleteDonations",
        namespace: null,
        modelApiIdentifier: "donation",
        modelSelectionField: "donations",
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
    this.create = Object.assign(
      createDonation,
      {
        type: "action",
        operationName: "createDonation",
        namespace: null,
        modelApiIdentifier: "donation",
        modelSelectionField: "donation",
        isBulk: false,
        defaultSelection: DefaultDonationSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          "donation": {
            required: false,
            type: "CreateDonationInput"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: true,
        isCreateOrUpdateAction: true,
        paramOnlyVariables: []
      }
    );
    this.update = Object.assign(
      updateDonation,
      {
        type: "action",
        operationName: "updateDonation",
        namespace: null,
        modelApiIdentifier: "donation",
        modelSelectionField: "donation",
        isBulk: false,
        defaultSelection: DefaultDonationSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "donation": {
            required: false,
            type: "UpdateDonationInput"
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
  DefaultDonationSelection,
  DonationManager
});
//# sourceMappingURL=Donation.js.map
