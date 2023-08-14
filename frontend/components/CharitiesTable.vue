<template>
  <div class="q-pa-md">
    <q-table flat bordered :rows="filteredRows" :columns="columns" :filter="filter" row-key="name"
      :selected-rows-label="getSelectedString" selection="multiple" v-model:selected="selected" virtual-scroll
      v-model:pagination="pagination" :rows-per-page-options="[0]" class="my-sticky-virtscroll-table">
      <template v-slot:top-left>

        <div class="q-mt-md">
          <q-btn label="Submit" @click="handleSubmit"
            :disabled="selected.length + submittedRows.length > 3 || selected.length === 0" />
          <span class="q-ml-md" style="color: var(--p-text-critical);">{{ errorMessage }}</span>

        </div>
      </template>
      <template v-slot:top-right>
        <div class="q-mr-md">
          <q-select filled dense debounce="300" v-model="selectedCauses" :options="availableCauses" multiple
            :display-value="`Filter Cause(s)`" />
        </div>
        <div>
          <q-input filled dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">

          <q-td>
            <q-checkbox v-model="props.selected" :value="props.row" @input="e => props.selected = e ? props.row : null" />
          </q-td>

          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="causes" :props="props">
            <div class="badge-container">
              <template v-for="cause in props.row['causes']">
                <q-badge class="my-badge" :style="{ backgroundColor: '#f0f0f0', color: '#333' }">
                  {{ cause }}
                </q-badge>
              </template>
            </div>
          </q-td>
          <q-td key="link" :props="props">
            <q-btn flat no-caps label="View More" @click="onRowClick(props.row)" />
            <q-dialog v-model="showDialog">
              <div class="fixed-size-modal">

                <CharityDetails :charityId="currentCharityId" />
              </div>

            </q-dialog>
          </q-td>
        </q-tr>
      </template>

    </q-table>
    <div v-if="submittedRows.length" class="q-mt-md vertical-tabs">
      <p>Selected:</p>
      <div v-for="row in submittedRows" :key="row.name" class="tab-badge-style">
        <span>{{ row.name }}</span>
        <q-btn flat dense icon="close" @click="removeTab(row)" class="q-ml-sm close-button" />
      </div>
      <!-- Tab Panels (content of each tab) can be added if needed using q-tab-panels and q-tab-panel components -->
    </div>

  </div>
</template>
  
<script>
import { ref, onMounted, computed, watch } from 'vue';
import { api } from "../utils/api";
import { GET_ALL_CHARITIES } from "../utils/queries";
import CharityDetails from '../components/CharityDetail.vue';

export default {
  name: 'CharitiesTable',
  components: {
    CharityDetails,
  },

  setup(_, { emit }) {

    const columns = [
      {
        name: 'name',
        required: true,
        label: 'Charity',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      },
      { name: 'causes', align: 'left', label: 'Cause(s)', field: 'causes', sortable: false },
      {
        name: 'link',
        required: true,
        label: '',
        align: 'left',
        field: row => row.name,
      },

    ];

    const rows = ref([]);
    const selected = ref([]);
    const selectedCauses = ref([]);
    const availableCauses = ref([]);
    const filter = ref('');
    const loading = ref(true);
    const activeTab = ref(null);
    const errorMessage = ref('');
    const submittedRows = ref([]);
    const showDialog = ref(false);
    const currentCharityId = ref(null);


    onMounted(async () => {
      // const first = 10;
      // const after = null;

      // const response = await api.query(GET_CHARITIES, { first, after });
      // loading everything now first
      const response = await api.query(GET_ALL_CHARITIES);

      rows.value = response.charities.edges.map(edge => ({
        id: edge.node.id,
        url: `charities/${edge.node.id}`,
        name: edge.node.name,
        causes: edge.node.causes.edges.map(causeEdge => causeEdge.node.category),
      }));

      availableCauses.value = Array.from(new Set(rows.value.flatMap(row => row.causes)));
      loading.value = false;
    });

    const filteredRows = computed(() => {
      let rowsFilteredByCauses = selectedCauses.value.length === 0 ? rows.value : rows.value.filter(row => row.causes.some(cause => selectedCauses.value.includes(cause)));

      // Filter out submitted rows from the filtered rows
      return rowsFilteredByCauses.filter(row => !submittedRows.value.some(submittedRow => submittedRow.id === row.id));
    });

    const getSelectedString = () => {
      return selected.value.length === 0 ? '' : `${selected.value.length} record${selected.value.length > 1 ? 's' : ''} selected of ${rows.value.length}`;
    };
    const onRowClick = (row) => {
      currentCharityId.value = row.id;
      showDialog.value = true;
    };
    const handleSubmit = () => {
      if (submittedRows.value.length + selected.value.length <= 3) {
        submittedRows.value.push(...selected.value);
        selected.value = [];
        emit('update:submittedRows', submittedRows.value);
      }
    };

    watch(selected, (newValue) => {
      if (submittedRows.value.length + newValue.length > 3) {
        errorMessage.value = "You can only select up to 3 charities";
      } else {
        errorMessage.value = ""; // Clear the error message
      }
    });

    const removeTab = (row) => {
      const index = submittedRows.value.findIndex(r => r.name === row.name);
      if (index !== -1) {
        submittedRows.value.splice(index, 1);
      }
      if (activeTab.value === row.name && submittedRows.value.length) {
        activeTab.value = submittedRows.value[0].name;
      } else {
        activeTab.value = null;
      }
      // Emit the updated submittedRows after removing a tab
      emit('update:submittedRows', submittedRows.value);
    };

    return {
      selected,
      columns,
      rows,
      selectedCauses,
      availableCauses,
      filteredRows,
      filter,
      getSelectedString,
      loading,
      onRowClick,
      pagination: ref({
        rowsPerPage: 0
      }),
      submittedRows,
      activeTab,
      handleSubmit,
      removeTab,
      errorMessage,
      showDialog,
      currentCharityId,
    }
  }
}
</script>
  
<style lang="sass">
.my-sticky-virtscroll-table
  /* height or max-height is important */
  max-height: 400px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #ffffff

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
    
.tab-badge-style 
  background-color: #f0f0f0
  color: #333
  margin-bottom: 8px
  border-radius: 12px
  padding: 4px 8px 
  display: flex  
  align-items: center
  justify-content: space-between

  .close-button 
    margin-left: 8px

.badge-container 
  .my-badge 
    margin-right: 8px
    margin-bottom: 8px
    &:last-child 
      margin-right: 0

.fixed-size-modal
    width: 600px
    height: 800px
</style>