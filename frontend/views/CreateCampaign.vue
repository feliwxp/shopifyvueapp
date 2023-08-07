<template>
  <main>

    <Page :narrowWidth="true" title="Create Campaign">
      <Card>
        <EmptyState v-bind="args" :action="{ content: 'Create Campaign', onAction: routeToCreateCampaign }"
          :secondaryAction="{ content: 'Learn More', url: 'https://help.shopify.com' }"
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png">
          <p>Create and manage your campaigns here.</p>

          <template #footerContent>
            <p>
              Learn more about managing your campaigns
              <Link monochrome url="/settings"> here</Link>.
            </p>
          </template>
        </EmptyState>
      </Card>
    </Page>
  </main>
</template>

<script>
export default {
  data() {
    return {
      args: true
    };
  },
  methods: {
    routeToCreateCampaign() {
      this.$router.push('/create-campaign');
    }
  }
}
</script>