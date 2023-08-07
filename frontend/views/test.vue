<template>
  <main>
    <Page :fullWidth="true" title="Browse Causes" subtitle="Find your favourite causes">

      <Combobox :allowMultiple="true">
        <template #activator>
          <ComboboxTextField autoComplete="off" :labelHidden="true" v-model="searchValue" placeholder="Search customer">
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
    </Page>
  </main>
</template>
  
<script>
import SearchMinor from '@shopify/polaris-icons/dist/svg/SearchMinor.svg';

export default {
  data() {
    return {
      searchIcon: SearchMinor,
      options: [
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
        ? this.options
          .filter(el => el.value.includes(this.searchValue))
        : this.options;
    }
  },
  methods: {
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
}
</script>