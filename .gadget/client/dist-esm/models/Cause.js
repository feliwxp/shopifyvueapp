import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
const DefaultCauseSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "category": true
};
;
;
;
;
;
;
;
;
async function updateCause(id, variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "cause";
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
  return await actionRunner(
    this,
    "updateCause",
    DefaultCauseSelection,
    "cause",
    "cause",
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "cause": {
        value: newVariables.cause,
        required: false,
        type: "UpdateCauseInput"
      }
    },
    options,
    null
  );
}
async function createCause(variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "cause";
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
  return await actionRunner(
    this,
    "createCause",
    DefaultCauseSelection,
    "cause",
    "cause",
    false,
    {
      "cause": {
        value: newVariables.cause,
        required: false,
        type: "CreateCauseInput"
      }
    },
    options,
    null
  );
}
async function deleteCause(id, options) {
  return await actionRunner(
    this,
    "deleteCause",
    null,
    "cause",
    "cause",
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
class CauseManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one cause by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "cause",
          id,
          DefaultCauseSelection,
          "cause",
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "cause",
        modelApiIdentifier: "cause",
        defaultSelection: DefaultCauseSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one cause by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "cause",
          id,
          DefaultCauseSelection,
          "cause",
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "cause",
        modelApiIdentifier: "cause",
        defaultSelection: DefaultCauseSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds many cause. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "causes",
          DefaultCauseSelection,
          "cause",
          options
        );
      },
      {
        type: "findMany",
        operationName: "causes",
        modelApiIdentifier: "cause",
        defaultSelection: DefaultCauseSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching cause. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "causes",
          DefaultCauseSelection,
          "cause",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "causes",
        modelApiIdentifier: "cause",
        defaultSelection: DefaultCauseSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching cause. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "causes",
          DefaultCauseSelection,
          "cause",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "causes",
        modelApiIdentifier: "cause",
        defaultSelection: DefaultCauseSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one cause by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "causes",
          "id",
          value,
          DefaultCauseSelection,
          "cause",
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "causes",
        modelApiIdentifier: "cause",
        defaultSelection: DefaultCauseSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    this.update = Object.assign(
      updateCause,
      {
        type: "action",
        operationName: "updateCause",
        namespace: null,
        modelApiIdentifier: "cause",
        modelSelectionField: "cause",
        isBulk: false,
        defaultSelection: DefaultCauseSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "cause": {
            required: false,
            type: "UpdateCauseInput"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: true,
        isCreateOrUpdateAction: true,
        paramOnlyVariables: []
      }
    );
    this.create = Object.assign(
      createCause,
      {
        type: "action",
        operationName: "createCause",
        namespace: null,
        modelApiIdentifier: "cause",
        modelSelectionField: "cause",
        isBulk: false,
        defaultSelection: DefaultCauseSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          "cause": {
            required: false,
            type: "CreateCauseInput"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: true,
        isCreateOrUpdateAction: true,
        paramOnlyVariables: []
      }
    );
    this.delete = Object.assign(
      deleteCause,
      {
        type: "action",
        operationName: "deleteCause",
        namespace: null,
        modelApiIdentifier: "cause",
        modelSelectionField: "cause",
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
        return await actionRunner(
          this,
          "bulkDeleteCauses",
          null,
          "cause",
          "causes",
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
        operationName: "bulkDeleteCauses",
        namespace: null,
        modelApiIdentifier: "cause",
        modelSelectionField: "causes",
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
export {
  CauseManager,
  DefaultCauseSelection
};
//# sourceMappingURL=Cause.js.map
