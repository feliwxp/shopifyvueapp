<template>
  <main>
    <Page :fullWidth="true" :title="charity.name" :breadcrumbs="[{ content: 'Browse', url: '/browse' }]"
      :pagination="{ hasPrevious: true, hasNext: true }">
      <AlphaCard>
        <AlphaStack spacing="5">
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
    </Page>
  </main>
</template>

<script>
import { useRoute } from 'vue-router';
import { useCharityStore } from '../store'; // adjust the path to your store file

export default {
  async mounted() {
    const route = useRoute();
    const charityId = route.params.id;
    const charityStore = useCharityStore(); // use the store

    // call the action to fetch the charity details
    await charityStore.fetchCharityDetails(charityId);
  },
  computed: {
    charity() {
      const charityStore = useCharityStore();
      return charityStore.charity; // access the charity state
    },
    formattedDescription() {
      const charityStore = useCharityStore();
      return charityStore.formattedDescription; // access the getter
    }
  }
};
</script>
