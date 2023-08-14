<template>
  <main>
    <Page :fullWidth="true" title="Browse NonProfits" subtitle="Find your favourite causes">
      <div class="q-pa-md">
        <q-table flat bordered :rows="filteredRows" :columns="columns" :filter="filter" row-key="name">

          <template v-slot:top-right>
            <div class="q-mr-md">
              <q-select filled dense debounce="300" v-model="selectedCauses" :options="availableCauses" multiple
                :display-value="`Select Cause(s)`" />
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
            <q-tr :props="props" @click="onRowClick(props.row)" :style="{ cursor: 'pointer' }">

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

            </q-tr>
          </template>

        </q-table>
      </div>
    </Page>
  </main>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { api } from "../utils/api";
import { GET_ALL_CHARITIES } from "../utils/queries";
import { useRouter } from 'vue-router';

export default {
  setup() {

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
    ];

    const rows = ref([]);
    const selectedCauses = ref([]);
    const availableCauses = ref([]);
    const filter = ref('');
    const loading = ref(true);
    const router = useRouter();

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
      if (selectedCauses.value.length === 0) {
        return rows.value;
      } else {
        return rows.value.filter(row => row.causes.some(cause => selectedCauses.value.includes(cause)));
      }
    });

    const onRowClick = (row) => {
      router.push(row.url);
    };
    console.log(columns)

    return {
      columns,
      rows,
      selectedCauses,
      availableCauses,
      filteredRows,
      filter,
      loading,
      onRowClick

    }
  }
}
</script>
