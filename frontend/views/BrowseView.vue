<template>
    <main>

        <Page :fullWidth="true" title="Browse Causes" subtitle="Find your favourite causes">
            <Card>
                <ResourceList selectable :selectedItems="selectedItems"
                    :resourceName="{ singular: 'customer', plural: 'customers' }" @selection-change="handleSelectionChange">
                    <template #filterControl>
                        <Filters v-model="queryValue" :filters="filters" :appliedFilters="appliedFilters"
                            @query-clear="handleClearQuery" @clear-all="clearAllFilters">
                            <template #filter-accountStatus>
                                <ChoiceList title="Account status" titleHidden
                                    :choices="[{ label: 'Enabled', value: 'enabled' }, { label: 'Not invited', value: 'not-invited' }]"
                                    v-model="accountStatus" :allowMultiple="true">
                                </ChoiceList>
                            </template>
                            <template #filter-taggedWith>
                                <TextField label="Tagged with" v-model="taggedWith" autoComplete="off" labelHidden />
                            </template>
                            <template #filter-moneySpent>
                                <RangeSlider label="Money spent is between" labelHidden v-model="moneySpent" prefix="$"
                                    output :min="0" :max="2000" :step="1" />
                            </template>
                        </Filters>
                    </template>
                    <template #alternateTool>
                        <Button>Email Customers</Button>
                    </template>
                    <ResourceItem v-for="item in resourceItems" :key="item.id" :url="item.url" :id="`${item.id}`"
                        :accessibilityLabel="`View details for ${item.name}`" persistActions
                        :shortcutActions="item.latestOrderUrl ? [{ content: 'View latest order', url: item.latestOrderUrl }] : null">
                        <template #media>
                            <Avatar customer size="medium" :name="item.name" />
                        </template>
                        <h3>
                            <TextStyle variation="strong">{{ item.name }}</TextStyle>
                        </h3>
                        <div>{{ item.location }}</div>
                    </ResourceItem>
                </ResourceList>
            </Card>
        </Page>
    </main>
</template>
  
<script setup>
import { ref, computed } from 'vue';
const resourceItems = [
    {
        id: 100,
        url: 'customers/341',
        name: 'Mae Jemison',
        location: 'Decatur, USA',
        latestOrderUrl: 'orders/123',
    },
    {
        id: 200,
        url: 'customers/256',
        name: 'Ellen Ochoa',
        location: 'Los Angeles, USA',
    },
];

const filters = [{
    key: 'accountStatus',
    label: 'Account status',
    shortcut: true,
}, {
    key: 'taggedWith',
    label: 'Tagged with',
    shortcut: true,
}, {
    key: 'moneySpent',
    label: 'Money spent',
}];

const selectedItems = ref([]);
const accountStatus = ref([]);
const moneySpent = ref([]);
const taggedWith = ref(null);
const queryValue = ref(null);

const appliedFilters = computed(() => {
    const tmpFilters = [];
    if (accountStatus.value && accountStatus.value.length > 0) {
        const key = 'accountStatus';
        tmpFilters.push({
            key,
            label: disambiguateLabel(key, accountStatus.value),
            onRemove: handleAccountStatusRemove,
        });
    }
    if (moneySpent.value && moneySpent.value.length > 0) {
        const key = 'moneySpent';
        tmpFilters.push({
            key,
            label: disambiguateLabel(key, moneySpent.value),
            onRemove: handleMoneySpentRemove,
        });
    }
    if (taggedWith.value) {
        const key = 'taggedWith';
        tmpFilters.push({
            key,
            label: disambiguateLabel(key, taggedWith.value),
            onRemove: handleTaggedWithRemove,
        });
    }
    return tmpFilters;
});

const handleAccountStatusRemove = () => {
    accountStatus.value = [];
};
const handleMoneySpentRemove = () => {
    moneySpent.value = [];
};
const handleTaggedWithRemove = () => {
    taggedWith.value = null;
};
const handleClearQuery = () => {
    queryValue.value = '';
}
const clearAllFilters = () => {
    handleAccountStatusRemove();
    handleMoneySpentRemove();
    handleTaggedWithRemove();
};
const handleSelectionChange = (selected) => {
    selectedItems.value = selected;
}

function disambiguateLabel(key, value) {
    switch (key) {
        case 'moneySpent':
            return `Money spent is between $${value[0]} and $${value[1]}`;
        case 'taggedWith':
            return `Tagged with ${value}`;
        case 'accountStatus':
            return value.map((val) => `Customer ${val}`).join(', ');
        default:
            return value;
    }
}
</script>