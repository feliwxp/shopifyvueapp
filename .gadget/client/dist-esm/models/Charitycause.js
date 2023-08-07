import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
const DefaultCharitycauseSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true
};
;
;
;
;
;
;
;
;
async function updateCharitycause(id, variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "charitycause";
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
    "updateCharitycause",
    DefaultCharitycauseSelection,
    "charitycause",
    "charitycause",
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "charitycause": {
        value: newVariables.charitycause,
        required: false,
        type: "UpdateCharitycauseInput"
      }
    },
    options,
    null
  );
}
async function createCharitycause(variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "charitycause";
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
    "createCharitycause",
    DefaultCharitycauseSelection,
    "charitycause",
    "charitycause",
    false,
    {
      "charitycause": {
        value: newVariables.charitycause,
        required: false,
        type: "CreateCharitycauseInput"
      }
    },
    options,
    null
  );
}
async function deleteCharitycause(id, options) {
  return await actionRunner(
    this,
    "deleteCharitycause",
    null,
    "charitycause",
    "charitycause",
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
class CharitycauseManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one charitycause by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "charitycause",
          id,
          DefaultCharitycauseSelection,
          "charitycause",
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "charitycause",
        modelApiIdentifier: "charitycause",
        defaultSelection: DefaultCharitycauseSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one charitycause by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "charitycause",
          id,
          DefaultCharitycauseSelection,
          "charitycause",
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "charitycause",
        modelApiIdentifier: "charitycause",
        defaultSelection: DefaultCharitycauseSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds many charitycause. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "charitycauses",
          DefaultCharitycauseSelection,
          "charitycause",
          options
        );
      },
      {
        type: "findMany",
        operationName: "charitycauses",
        modelApiIdentifier: "charitycause",
        defaultSelection: DefaultCharitycauseSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching charitycause. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "charitycauses",
          DefaultCharitycauseSelection,
          "charitycause",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "charitycauses",
        modelApiIdentifier: "charitycause",
        defaultSelection: DefaultCharitycauseSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching charitycause. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "charitycauses",
          DefaultCharitycauseSelection,
          "charitycause",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "charitycauses",
        modelApiIdentifier: "charitycause",
        defaultSelection: DefaultCharitycauseSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one charitycause by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "charitycauses",
          "id",
          value,
          DefaultCharitycauseSelection,
          "charitycause",
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "charitycauses",
        modelApiIdentifier: "charitycause",
        defaultSelection: DefaultCharitycauseSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    this.update = Object.assign(
      updateCharitycause,
      {
        type: "action",
        operationName: "updateCharitycause",
        namespace: null,
        modelApiIdentifier: "charitycause",
        modelSelectionField: "charitycause",
        isBulk: false,
        defaultSelection: DefaultCharitycauseSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "charitycause": {
            required: false,
            type: "UpdateCharitycauseInput"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: true,
        isCreateOrUpdateAction: true,
        paramOnlyVariables: []
      }
    );
    this.create = Object.assign(
      createCharitycause,
      {
        type: "action",
        operationName: "createCharitycause",
        namespace: null,
        modelApiIdentifier: "charitycause",
        modelSelectionField: "charitycause",
        isBulk: false,
        defaultSelection: DefaultCharitycauseSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          "charitycause": {
            required: false,
            type: "CreateCharitycauseInput"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: true,
        isCreateOrUpdateAction: true,
        paramOnlyVariables: []
      }
    );
    this.delete = Object.assign(
      deleteCharitycause,
      {
        type: "action",
        operationName: "deleteCharitycause",
        namespace: null,
        modelApiIdentifier: "charitycause",
        modelSelectionField: "charitycause",
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
          "bulkDeleteCharitycauses",
          null,
          "charitycause",
          "charitycauses",
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
        operationName: "bulkDeleteCharitycauses",
        namespace: null,
        modelApiIdentifier: "charitycause",
        modelSelectionField: "charitycauses",
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
  CharitycauseManager,
  DefaultCharitycauseSelection
};
//# sourceMappingURL=Charitycause.js.map
