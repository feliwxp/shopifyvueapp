<template>
  <main>
    <Page :fullWidth="true" title="Browse Causes" subtitle="Find your favourite causes">
      <Card>
        <ResourceList :resourceName="{ singular: 'cause', plural: 'causes' }">
          <template #filterControl>
            <Filters v-model="queryValue" :filters="filters" :appliedFilters="appliedFilters"
              @query-clear="handleClearQuery" @clear-all="clearAllFilters">
              <template #filter-selectedCauses>
                <ChoiceList title="Cause" titleHidden :choices="causeList" v-model="selectedCauses" :allowMultiple="true">
                </ChoiceList>
              </template>
            </Filters>
          </template>
          <ResourceItem v-for="item in filteredResourceItems" :key="item.id" :url="item.url" :id="`${item.id}`">
            <template #media>
              <Avatar customer size="medium" :name="item.name" />
            </template>
            <h3>
              <TextStyle variation="strong">{{ item.name }}</TextStyle>
            </h3>
            <!-- <div>
              <span v-for="cause in item.causes" :key="cause">
                <Tag>{{ cause }}</Tag>&nbsp;
              </span>
            </div> -->
            <div><span v-for="cause in item.causes" :key="cause" class="cause-bubble">{{ cause }}</span></div>
          </ResourceItem>
        </ResourceList>
      </Card>
    </Page>
  </main>
</template>
  
<script>
import { api } from "../utils/api";
import { GET_CHARITIES } from "../utils/queries";

export default {

  data() {
    return {
      resourceItems: [],
      filters: [{
        key: 'selectedCauses',
        label: 'Causes',
        shortcut: true,
      }],
      selectedCauses: [],
      queryValue: null,
    };
  },
  async mounted() {
    const first = 10;
    const after = null; // You can set the initial value of after here

    const response = await api.query(GET_CHARITIES, { first, after });

    this.resourceItems = response.charities.edges.map(edge => ({
      id: edge.node.id,
      url: `charities/${edge.node.id}`,
      name: edge.node.name,
      causes: edge.node.causes.edges.map(causeEdge => causeEdge.node.category),
    }));
  },
  computed: {
    appliedFilters() {
      const tmpFilters = [];
      if (this.selectedCauses.length > 0) {
        const key = 'selectedCauses';
        tmpFilters.push({
          key,
          label: this.disambiguateLabel(key, this.selectedCauses),
          onRemove: this.handleSelectedCausesRemove,
        });
      }
      return tmpFilters;
    },
    causeList() {
      // Extract unique causes from resourceItems
      const causes = [...new Set(this.resourceItems.flatMap(item => item.causes))];

      // Transform the causes into the format expected by ChoiceList
      return causes.map(cause => ({ label: cause, value: cause }));
    },

    filteredResourceItems() {
      if (this.selectedCauses.length === 0) {
        return this.resourceItems; // Return all items if no causes are selected
      }

      // Filter resourceItems based on selected causes
      return this.resourceItems.filter(item =>
        this.selectedCauses.some(selectedCause => item.causes.includes(selectedCause))
      );
    },
  },
  methods: {
    handleSelectedCausesRemove() {
      this.selectedCauses = [];
    },
    handleClearQuery() {
      this.queryValue = '';
    },
    clearAllFilters() {
      this.handleSelectedCausesRemove();
    },
    disambiguateLabel(key, value) {
      switch (key) {
        case 'selectedCauses':
          return value.map((val) => `Cause: ${val}`).join(', ');
        default:
          return value;
      }
    },
  },
};
</script>


<style></style>