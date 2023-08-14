<template>
  <main>
    <Page :fullWidth="true" :title="charity.name" :breadcrumbs="[{ content: 'Browse', url: '/browse' }]">
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
import { useCharityStore } from '../store';

export default {
  async mounted() {
    const route = useRoute();
    const charityId = route.params.id;
    const charityStore = useCharityStore();

    // Fetch all charities and the current charity details
    await charityStore.fetchCharities();
    await charityStore.fetchCharityDetails(charityId);
  },
  computed: {
    charity() {
      const charityStore = useCharityStore();
      return charityStore.charity;
    },
    formattedDescription() {
      const charityStore = useCharityStore();
      return charityStore.formattedDescription;
    },

  },

};
</script>
