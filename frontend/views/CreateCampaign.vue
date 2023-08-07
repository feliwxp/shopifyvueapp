<template>
  <main>

    <Page :fullWidth="true" title="Create Campaign" :primaryAction="{ content: 'Save', disabled: true }">
      <template #primaryAction>
        <Button primary
          :connectedDisclosure="{ accessibilityLabel: 'Other save actions', actions: [{ content: 'Save as new' }] }">
          Save
        </Button>
      </template>

      <Card sectioned>
        <AnnotatedSection>
          <template #title>Campaign Set Up</template>
          <template #description>
            Choose the type of campaign you would like to create.
          </template>
          <FormLayout>
            <Select placeholder="Select an option" v-model="selectedValue" :options="options">
              <template #label>Campaign Type</template>
              <template #help-text>Read more about campaign types here</template>
              <template #prefix-hint>
                <Icon :source="iconHintMajor" />
              </template>
            </Select>
            <TextField autoComplete="off">
              <template #label>
                Campaign name
              </template>
            </TextField>
          </FormLayout>
        </AnnotatedSection>
        <LayoutSection>
        </LayoutSection>
        <AnnotatedSection>
          <template #title>Select benefiting nonprofits</template>
          <template #description>
            Choose the type of campaign you would like to create.
          </template>
          <FormLayout>
            <Combobox :allowMultiple="true">
              <template #activator>
                <ComboboxTextField autoComplete="off" :labelHidden="true" v-model="searchValue"
                  placeholder="Search customer">
                  <template #prefix>
                    <Icon :source="searchIcon" color="inkLighter"></Icon>
                  </template>
                </ComboboxTextField>
              </template>
              <Listbox @select="handleOptionSelected">
                <ListboxOption v-for="option, index in filteredOptions" :key="index" :value="option.value"
                  :selected="selectedOptions.includes(option.value)">
                  {{ option.label }}
                </ListboxOption>
              </Listbox>
            </Combobox>
            <TextContainer>
              <p> Tag component display options in selectedOptions</p>
              <Stack>
                <Tag v-for="option, index in selectedOptions" :key="index" @remove="handleRemoveTag(option)">
                  {{ option }}
                </Tag>
              </Stack>
            </TextContainer>
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
        </AnnotatedSection>
      </Card>
      <PageActions :primaryAction="{ content: 'Save', onClick: handleClick }"
        :secondaryActions="[{ content: 'Delete', destructive: true, onClick: handleClick }]" />
    </Page>

  </main>
</template>



<script>
import { ref } from 'vue';
import SearchMinor from '@shopify/polaris-icons/dist/svg/SearchMinor.svg';

export default {
  data() {
    return {
      searchIcon: SearchMinor,
      optionsCause: [
        { value: 'rustic', label: 'Rustic' },
        { value: 'antique', label: 'Antique' },
        { value: 'vinyl', label: 'Vinyl' },
        { value: 'vintage', label: 'Vintage' },
        { value: 'refurbished', label: 'Refurbished' },
        { value: 'polaris', label: 'Polaris' },
        { value: 'custom', label: 'Custom' },
      ],
      searchValue: '',
      selectedOptions: ['rustic', 'antique'],
    };
  },
  computed: {
    filteredOptions() {
      return this.searchValue
        ? this.optionsCause
          .filter(el => el.value.includes(this.searchValue))
        : this.optionsCause;
    }
  },

  methods: {
    routeToBrowse() {
      this.$router.push('/browse');
    },
    routeToCampaign() {
      this.$router.push('/campaigns');
    },
    handleOptionSelected(option) {
      if (this.selectedOptions.includes(option)) {
        this.selectedOptions = this.selectedOptions.filter(el => el !== option);
      }
      else {
        this.selectedOptions.push(option);
      }
    },
    handleRemoveTag(optionVal) {
      this.selectedOptions = this.selectedOptions.filter(el => el !== optionVal);
    }
  },
  setup() {
    const options = [
      { "label": "Portion of Sales", "value": "portionofsales" },
      { "label": "Round Up", "value": "roundup" },
      { "label": "Donation Matching", "value": "donationmatching" },
      { "label": "Gift with Donation", "value": "giftwithdonation" },
      { "label": "Donation for Discount", "value": "donatefordiscount" },
      { "label": "Donation Tiers", "value": "donationtiers" },

    ]
    const selectedValue = ref('');
    return { options, selectedValue };
  }
}
</script>