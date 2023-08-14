<template>
  <AlphaCard v-if="isLoading">
    <AlphaStack spacing="5">
      <Spinner />
    </AlphaStack>
  </AlphaCard>

  <AlphaCard v-else>
    <AlphaStack spacing="5">
      <Text as="h1" variant="headingXl">
        {{ charity.name }}
      </Text>
      <div><span v-for="cause in charity.causes" :key="cause" class="cause-bubble">{{ cause }}</span></div>

      <Text as="h3" variant="headingMd">
        About Us
      </Text>
      <p v-html="formattedDescription"></p>
      <a :href="charity.website_url" target="_blank" rel="noopener noreferrer">
        Visit Website <i class="external-icon">🔗</i>
      </a>
    </AlphaStack>
  </AlphaCard>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useCharityStore } from '../store';

export default {
  props: ['charityId'],

  setup(props) {
    const isLoading = ref(true);
    const charityStore = useCharityStore();

    const charity = computed(() => charityStore.charity);
    const formattedDescription = computed(() => charityStore.formattedDescription);

    const fetchData = async () => {
      try {
        await charityStore.fetchCharities();
        await charityStore.fetchCharityDetails(props.charityId);
      } catch (error) {
        console.error("Error fetching charity details:", error);
        // Handle the error as appropriate
      } finally {
        isLoading.value = false;
      }
    }

    // Use onMounted to replace the async mounted lifecycle hook.
    onMounted(fetchData);

    return {
      charity,
      formattedDescription,
      isLoading
    };
  }
};
</script>