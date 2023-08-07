import { defineStore } from "pinia";
import { api } from "./utils/api";
import { GET_CHARITY_DETAIL } from "./utils/queries";

export const useCharityStore = defineStore({
  id: "charity",
  state: () => ({
    charity: {},
  }),
  getters: {
    formattedDescription: (state) => {
      if (state.charity && state.charity.description) {
        return state.charity.description.replace(/\n\n/g, "<br /><br />");
      } else {
        return "";
      }
    },
  },
  actions: {
    async fetchCharityDetails(charityId) {
      const response = await api.query(GET_CHARITY_DETAIL, { id: charityId });
      this.charity = {
        name: response.charity.name,
        website_url: response.charity.website_url,
        description: response.charity.description,
        causes: response.charity.causes.edges.map((edge) => edge.node.category),
      };
    },
  },
});
