<template>
  <div>
    <h1>{{ charity.name }}</h1>
    <!-- Render other details of the charity here -->
  </div>
</template>
  
<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { api } from '../utils/api';
import { GET_CHARITY_DETAIL } from '../utils/queries';

export default {
  setup() {
    const route = useRoute();
    const charityId = route.params.id; // Get the charity's ID from the route
    const charity = ref(null);

    // Fetch the details of the charity by its ID
    api.query(GET_CHARITY_DETAIL, { id: charityId }).then(response => {
      charity.value = response.data.charity;
    });

    return { charity };
  },
};
</script>
  