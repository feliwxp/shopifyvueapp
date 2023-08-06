<template>
  <main>
    <Page :fullWidth="true" title="Account">
      <Layout>
        <LayoutSection>
        </LayoutSection>
        <AnnotatedSection>
          <template #title>Store details</template>
          <template #description>
            Shopify and your customers will use this information to contact you.
          </template>
          <Card sectioned>
            <FormLayout>
              <TextField autoComplete="off">
                <template #label>
                  Store name
                </template>
              </TextField>
              <TextField type="email" autoComplete="email">
                <template #label>
                  Account email
                </template>
              </TextField>
            </FormLayout>
          </Card>
        </AnnotatedSection>
      </Layout>
      <Layout>
        <LayoutSection>
        </LayoutSection>
        <AnnotatedSection>
          <template #title>Store details</template>
          <template #description>
            Shopify and your customers will use this information to contact you.
          </template>
          <Card sectioned>
            <FormLayout>
              <TextField autoComplete="off">
                <template #label>
                  Store name
                </template>
              </TextField>
              <TextField type="email" autoComplete="email">
                <template #label>
                  Account email
                </template>
              </TextField>
            </FormLayout>
          </Card>
        </AnnotatedSection>
      </Layout>


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