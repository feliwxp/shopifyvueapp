<template>
  <main>
    <Page :fullWidth="true" title="Create Campaign" :primaryAction="{ content: 'Create', onClick: submit }"
      style="padding-bottom: 50px;">
      <SettingToggle :action="{ content: isActive ? 'Deactivate' : 'Activate', onAction: toggleActive }"
        :enabled="isActive">
        This campaign is <TextStyle variation="strong">{{ isActive ? 'activated' : 'deactivated' }}</TextStyle>.
      </SettingToggle>
      <card>
        <CardSection subdued="subdued">
          <template #title>
            <div style="display: flex; align-items: center;">
              <TextStyle variation=" strong" style="margin-right: 16px;">Active Dates</TextStyle>
              <Checkbox label="Set End Date" v-model="setEndDate" />
            </div>

            <div class="q-pa-md">
              <div style="display: flex; align-items: top;">
                <div style="display: flex; align-items: center;">

                  <label style="margin-right: 16px; font-weight: normal;">Start Campaign At</label>
                  <q-input style="margin-right: 16px;" filled v-model="startDate">
                    <template v-slot:prepend>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-date v-model="startDate" mask="YYYY-MM-DD HH:mm">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>

                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-time v-model="startDate" mask="YYYY-MM-DD HH:mm" format24h>
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-time>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
                <div v-if="setEndDate" style="display: flex; align-items: center;">

                  <label style="margin-right: 16px; font-weight: normal;">End Campaign At</label>
                  <q-input filled v-model="endDate" :error="!!formErrors.endDate" hide-bottom-space>
                    <template v-slot:error>
                      <div style="color: var(--p-text-critical); font-weight: normal; font-size: 14px;">{{
                        formErrors.endDate }}</div>
                    </template>
                    <template v-slot:prepend>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-date v-model="endDate" mask="YYYY-MM-DD HH:mm">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>

                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-time v-model="endDate" mask="YYYY-MM-DD HH:mm" format24h>
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-time>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
              </div>
            </div>
          </template>

        </CardSection>
      </card>

      <Card sectioned>
        <AnnotatedSection>
          <template #title>Campaign Set Up</template>
          <template #description>
            Choose the type of campaign you would like to create.
          </template>
          <FormLayout>
            <Select placeholder="Select campaign type" v-model="campaignType" :options="campaignOptions"
              :error="formErrors.campaignType || ''">
              <template #label>Campaign Type</template>
              <template #help-text>Read more about campaign types here</template>
              <template #prefix-hint>
                <Icon :source="iconHintMajor" />
              </template>
            </Select>
            <TextField autoComplete="off" v-model="campaignName" label="Campaign Name"
              :error="formErrors.campaignName || ''" />
          </FormLayout>
        </AnnotatedSection>

        <LayoutSection>
        </LayoutSection>

        <AnnotatedSection>
          <template #title>Select benefiting nonprofits</template>
          <template #description>
            Choose the type of campaign you would like to create.
          </template>
          <CharitiesTable @update:submittedRows="updateRows" />
          <div v-if="formErrors.selectedCharities"
            style="display: flex; align-items: center; justify-content: flex-start; color: var(--p-text-critical); margin-bottom: 5px">
            <Icon :source="CircleAlertMajor" color="critical"></Icon>
            <span>{{ formErrors.selectedCharities }}</span>
          </div>

          <div style="display: flex; align-items: center;">
            <Checkbox label="Allow customers to choose which nonprofit(s) to support" v-model="customNonprofit" />
            <q-icon name="info" color="grey-8" style="margin-left: 5px;">
              <q-tooltip style="font-size: 13px;" transition-show="fade" transition-hide="fade">
                By default, donations will be split evenly among the nonprofits you have selected.<br>
                Checking this box allows the customer to choose the nonprofit(s) their donation will go to.
              </q-tooltip>
            </q-icon>
          </div>

        </AnnotatedSection>
        <LayoutSection>
        </LayoutSection>

        <AnnotatedSection v-if="campaignType === 'portionofsales'">
          <template #title>Apply to all products or specific products</template>
          <template #description>
            Select if you want the plugin to be applied to all your products or specific products.
          </template>
          <FormLayout>
            <div>
              <RadioButton class="radio-button" name="products" value="allProducts" v-model="productsType"
                label="All Products" helpText="Plugin is applied to entire order and all product pages" />
              <RadioButton class="radio-button" name="products" value="someProducts" v-model="productsType"
                label="Selected Products" helpText="Plugin is applied to selected products" />

            </div>
            <div v-if="productsType === 'someProducts'">
              <button @click="openResourcePicker" style="margin-right: 10px;">
                Select Products
              </button>
              <span style="margin-right: 10px;">{{ numberOfSelectedProducts }} product(s) selected</span>
              <div v-if="formErrors.selectedProducts"
                style="margin-top: 5px; display: flex; align-items: center; justify-content: flex-start; color: var(--p-text-critical);">
                <Icon :source="CircleAlertMajor" color="critical"></Icon>
                <span>{{ formErrors.selectedProducts }}</span>
              </div>

            </div>
            <hr class="light-grey-line">
            <div>
              <RadioButton class="radio-button" name="donation" value="gross" v-model="donationType"
                label="Percentage of gross sales" />
              <RadioButton class="radio-button" name="donation" value="fixed" v-model="donationType"
                label="Fixed amount" />
            </div>
            <div>
              <TextField v-model="amount" type="number" autoComplete="off" label="Donation Amount"
                :error="formErrors.amount || ''" :prefix="pricePrefix" />
            </div>
            <hr class="light-grey-line">
            <div>
              <Checkbox label="Apply donations to Point of Sale purchases"
                helpText="Changes will affect future purchases only." v-model="isPos" />
            </div>
          </FormLayout>
        </AnnotatedSection>

        <AnnotatedSection v-if="campaignType === 'roundup' || campaignType === '1donation'">
          <template #title>Donation Matching</template>
          <template #description>
            Select if you wish to match customer donations. <br>
            <br>
            Choose "All time" if you will match donations indefinitely. Or choose a timeframe if your matching will occur
            within a specific date window only.
          </template>
          <FormLayout>
            <div>
              <Checkbox label="Match customer donations with your own" v-model="matchDonation" />
            </div>

            <div>
              <TextField v-model="orderLimit" type="number" autoComplete="off" label="Limit amount matched to per order"
                :disabled='!matchDonation' placeholder="No limit" prefix="$" />
            </div>
            <div>
              <TextField v-model="totalLimit" type="number" autoComplete="off" label="Limit amount matched to in total"
                :disabled='!matchDonation' placeholder="No limit" prefix="$" />
            </div>

          </FormLayout>
        </AnnotatedSection>

        <AnnotatedSection v-if="campaignType === 'roundup'">
          <template #title>Donation Settings</template>
          <template #description>
            Select the type of incentive you'd like to offer when a customer donates.
          </template>
          <FormLayout>
            <div>
              <Checkbox label="Allow customers the option to add a custom amount." v-model="allowCustomAmt" />
            </div>
          </FormLayout>
        </AnnotatedSection>

        <AnnotatedSection v-if="campaignType === '1donation'">
          <template #title>Donation Settings</template>
          <template #description>
            Set a different donation amount.
          </template>
          <FormLayout>
            <div>
              <TextField v-model="donationAmount" type="number" autoComplete="off" label="Donation Amount" prefix="$"
                :error="formErrors.donationAmount || ''" />
            </div>
          </FormLayout>
        </AnnotatedSection>

      </Card>
    </Page>
  </main>
</template>

<script>
import { ref, computed, reactive, watch } from 'vue';
import CharitiesTable from '../components/CharitiesTable.vue';
import CircleAlertMajor from '@shopify/polaris-icons/dist/svg/CircleAlertMajor.svg';


export default {
  components: {
    CharitiesTable
  },

  setup() {
    const campaignOptions = [
      { "label": "Portion of Sales", "value": "portionofsales" },
      { "label": "Round Up", "value": "roundup" },
      { "label": "$1 Donation", "value": "1donation" },
      // { "label": "Gift with Donation", "value": "giftwithdonation" },
      // { "label": "Donation for Discount", "value": "donatefordiscount" },
      // { "label": "Donation Tiers", "value": "donationtiers" },

    ]

    const campaignType = ref('');
    const campaignName = ref('');
    const selectedCharities = ref([]);
    const productsType = ref('allProducts');
    const donationType = ref('gross');
    const amount = ref('');
    const isActive = ref(false);
    const selectedProducts = ref([]);
    const isPos = ref(false);
    const customNonprofit = ref(false);
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const startDate = ref(formattedDate);
    const setEndDate = ref(false);
    const endDate = ref('');
    const updateRows = (newRows) => {
      selectedCharities.value = newRows;
    };
    const matchDonation = ref(false);
    const totalLimit = ref('');
    const orderLimit = ref('');
    const allowCustomAmt = ref(false);
    const donationAmount = ref('1');

    const formErrors = reactive({
      endDate: '',
      startDate: '',
      campaignType: '',
      selectedCharities: '',
      selectedProducts: '',
      amount: '',
      campaignName: '',
      donationAmount: '',
    });


    const pricePrefix = computed(() => {
      return donationType.value === 'gross' ? '%' : '$';
    });

    const toggleActive = () => {
      isActive.value = !isActive.value;
    }

    const openResourcePicker = async () => {
      try {
        const selection = await shopify.resourcePicker({
          type: 'product',
          multiple: true,
          selectionIds: selectedProducts.value.map(product => ({
            id: product.id,
            variants: product.variants ? product.variants.map(variant => ({ id: variant.id })) : []

          })),
          action: "Select"
        });

        // Merge and deduplicate product lists
        const newSelectedProducts = [...selectedProducts.value, ...selection].filter((product, index, self) =>
          index === self.findIndex(p => p.id === product.id)
        );

        selectedProducts.value = newSelectedProducts;

      } catch (error) {
        console.error("Error while opening the resource picker:", error);
      }
    };

    const numberOfSelectedProducts = computed(() => selectedProducts.value.length);

    const submit = () => {
      // Resetting errors
      for (let key in formErrors) {
        formErrors[key] = '';
      }

      // Validation
      if (setEndDate.value && (!endDate.value || new Date(startDate.value) >= new Date(endDate.value))) {
        formErrors.endDate = 'End date must be set after start date';
      }

      if (!campaignType.value) {
        formErrors.campaignType = 'Please select a campaign type';
      }

      if (!selectedCharities.value.length) {
        formErrors.selectedCharities = 'Please select at least one charity';
      }

      if (productsType.value === 'someProducts' && !selectedProducts.value.length) {
        formErrors.selectedProducts = 'Please select at least one product';
      }

      if (!amount.value && campaignType.value === "portionofsales") {
        formErrors.amount = 'Please enter a donation amount';
      }

      if (!campaignName.value) {
        formErrors.campaignName = 'Campaign name cannot be empty';
      }

      if (!donationAmount.value && campaignType.value === "1donation") {
        formErrors.donationAmount = 'Donation amount cannot be empty';
      }


      // If there are no errors, send the form data
      if (Object.values(formErrors).every(error => !error)) {
        // Place your GraphQL submission logic here
        // ... (use your queries imported from "../utils/queries")
      }
    }

    watch(campaignName, (newValue) => {
      if (newValue) {
        formErrors.campaignName = '';
      }
    });

    watch([endDate, startDate], ([newEndDate, newStartDate]) => {
      if (setEndDate.value && newEndDate && new Date(newStartDate) < new Date(newEndDate)) {
        formErrors.endDate = '';
      }
    });

    watch(campaignType, (newValue) => {
      if (newValue) {
        formErrors.campaignType = '';
      }
    });

    watch(selectedCharities, (newValue) => {
      if (newValue.length) {
        formErrors.selectedCharities = '';
      }
    }, { deep: true });

    watch(selectedProducts, (newValue) => {
      if (newValue.length || productsType.value !== 'someProducts') {
        formErrors.selectedProducts = '';
      }
    });

    watch(amount, (newValue) => {
      if (newValue) {
        formErrors.amount = '';
      }
    });

    watch(donationAmount, (newValue) => {
      if (newValue) {
        formErrors.donationAmount = '';
      }
    });

    const formData = {
      isActive: isActive.value,
      setEndDate: setEndDate.value,
      startDate: startDate.value,
      endDate: endDate.value,
      campaignType: campaignType.value,
      campaignName: campaignName.value, // campaign name must be unique should we have a campaign name or just id number will do?
      selectedCharities: selectedCharities.value,
      customNonprofit: customNonprofit.value,
      productsType: productsType.value,
      selectedProducts: selectedProducts.value,
      donationType: donationType.value,
      amount: amount.value,
      isPos: isPos.value,
      matchDonation: matchDonation.value,
      orderLimit: orderLimit.value,
      totalLimit: totalLimit.value,
      allowCustomAmt: allowCustomAmt.value,
      donationAmount: donationAmount.value,
    };
    return {
      campaignOptions, campaignType, updateRows, selectedCharities, productsType, donationType, pricePrefix, toggleActive, amount, isActive, openResourcePicker,
      numberOfSelectedProducts, isPos, startDate, setEndDate, endDate, submit, campaignName, formErrors, CircleAlertMajor, customNonprofit, matchDonation, totalLimit,
      orderLimit, allowCustomAmt, donationAmount
    };
  }
}
</script>

<style scoped>
.light-grey-line {
  border: none;
  /* Removes default borders */
  height: 1px;
  /* Sets the height of the line */
  background-color: #D3D3D3;
  /* Sets the color of the line */
}

.radio-button {
  margin-right: 10px;
  /* adds space below each radio button */
}

div .Polaris-Icon {
  margin: 0 8 0 0;
  height: 16px;
  width: 16px;
  position: relative;
}

.q-icon {
  float: top;
  /* not commonly used, but exists */
}
</style>