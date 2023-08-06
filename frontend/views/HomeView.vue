<template>
  <main>

    <Page :narrowWidth="true" title="Welcome to Tissue App" subtitle="Perfect for your ecommerce social campaigns">
      <Card sectioned :primaryFooterAction="{ content: 'Create campaign', onAction: routeToCampaign }">
        <Heading>Get started with your first campaign</Heading>
        <p>Launch one or multiple campaigns at a time</p>
      </Card>
      <Card sectioned :primaryFooterAction="{ content: 'Browse Causes', onAction: routeToBrowse }">
        <Heading>View all social causes available</Heading>
        <template #primaryFooterAction>
          <button url="/browse" />
        </template>
        <p></p>
      </Card>
    </Page>
  </main>
</template>

<script>
export default {
  methods: {
    routeToBrowse() {
      this.$router.push('/browse');
    },
    routeToCampaign() {
      this.$router.push('/campaigns');
    },
  }
}
</script>