<template>
  <PCard>
    <PResourceList selectable :selected="[]" hasMore :loading="false" :resourceName='{ "singular": "Book", "plural": "Books" }'
      :sortOptions='[{ "label": "Newest update", "value": "DATE_MODIFIED_DESC", "disabled": false }, { "label": "Oldest update", "value": "DATE_MODIFIED_ASC", "disabled": false }]'
      :promotedBulkActions='[{ "content": "Edit customers" }]'
      :bulkActions='[{ "content": "Publish" }, { "content": "Unpublish" }, { "content": "Archive" }, { "content": "Delete" }]'
      :totalCount="12" :appliedFilters='[{ "value": "Tagged with Vue", "key": "tag_Vue" }]'>
      <PButtonGroup slot="filter" segmented="">
        <PPopover id="resource_list_popover" :active="false" preferredPosition="mostSpace" preferredAlignment="right"
          fullWidth="">
          <PButton slot="activator" disclosure="down">Status</PButton>
          <PCard slot="content">
            <PCardSection>
              <PStack vertical="" spacing="tight">
                <PStackItem>
                  <PTextField label="Tagged with" labelHidden="" value="Vue" />
                </PStackItem>
                <PStackItem>
                  <PButton plain="">Clear</PButton>
                </PStackItem>
              </PStack>
            </PCardSection>
          </PCard>
        </PPopover>
        <PButton>Save</PButton>
      </PButtonGroup>
      <PResourceListItem :checked="false" selectable :loading="false" :selectMode="false" :id="100" persistActions=""
        :shortcutActions='[{ "content": "View latest order" }]'>
        <PAvatar slot="media" size="medium" customer="" name="PHP" />
        <div class="resource-list-item">
          <div class="resource-list-item__book--name">
            <p>PHP</p>
          </div>
          <div class="resource-list-item__resource--status">
            <h3>
              <PTextStyle variation="positive">Published</PTextStyle>
            </h3>
          </div>
        </div>
      </PResourceListItem>
      <PResourceListItem :checked="false" selectable :loading="false" :selectMode="false" :id="200" persistActions=""
        :shortcutActions='[{ "content": "View latest order" }]'>
        <PAvatar slot="media" size="medium" customer="" name="Vue" />
        <div class="resource-list-item">
          <div class="resource-list-item__book--name">
            <p>Vue</p>
          </div>
          <div class="resource-list-item__resource--status">
            <h3>
              <PTextStyle variation="subdued">Pending</PTextStyle>
            </h3>
          </div>
        </div>
      </PResourceListItem>
      <PResourceListItem :checked="false" selectable :loading="false" :selectMode="false" :id="300" persistActions=""
        :shortcutActions='[{ "content": "View latest order" }]'>
        <PAvatar slot="media" size="medium" customer="" name="React" />
        <div class="resource-list-item">
          <div class="resource-list-item__book--name">
            <p>React</p>
          </div>
          <div class="resource-list-item__resource--status">
            <h3>
              <PTextStyle variation="negative">Archived</PTextStyle>
            </h3>
          </div>
        </div>
      </PResourceListItem>
      <PResourceListItem :checked="false" selectable :loading="false" :selectMode="false" :id="400" persistActions=""
        :shortcutActions='[{ "content": "View latest order" }]'>
        <PAvatar slot="media" size="medium" customer="" name="Python" />
        <div class="resource-list-item">
          <div class="resource-list-item__book--name">
            <p>Python</p>
          </div>
          <div class="resource-list-item__resource--status">
            <h3>
              <PTextStyle variation="negative">Archived</PTextStyle>
            </h3>
          </div>
        </div>
      </PResourceListItem>
      <PResourceListItem :checked="false" selectable :loading="false" :selectMode="false" :id="500" persistActions=""
        :shortcutActions='[{ "content": "View latest order" }]'>
        <PAvatar slot="media" size="medium" customer="" name="Node" />
        <div class="resource-list-item">
          <div class="resource-list-item__book--name">
            <p>Node</p>
          </div>
          <div class="resource-list-item__resource--status">
            <h3>
              <PTextStyle variation="positive">Published</PTextStyle>
            </h3>
          </div>
        </div>
      </PResourceListItem>
      <PResourceListItem :checked="false" selectable :loading="false" :selectMode="false" :id="600" persistActions=""
        :shortcutActions='[{ "content": "View latest order" }]'>
        <PAvatar slot="media" size="medium" customer="" name="Shopify" />
        <div class="resource-list-item">
          <div class="resource-list-item__book--name">
            <p>Shopify</p>
          </div>
          <div class="resource-list-item__resource--status">
            <h3>
              <PTextStyle variation="negative">Archived</PTextStyle>
            </h3>
          </div>
        </div>
      </PResourceListItem>
      <PResourceListItem :checked="false" selectable :loading="false" :selectMode="false" :id="700" persistActions=""
        :shortcutActions='[{ "content": "View latest order" }]'>
        <PAvatar slot="media" size="medium" customer="" name="Ruby" />
        <div class="resource-list-item">
          <div class="resource-list-item__book--name">
            <p>Ruby</p>
          </div>
          <div class="resource-list-item__resource--status">
            <h3>
              <PTextStyle variation="subdued">Pending</PTextStyle>
            </h3>
          </div>
        </div>
      </PResourceListItem>
      <PResourceListItem :checked="false" selectable :loading="false" :selectMode="false" :id="800" persistActions=""
        :shortcutActions='[{ "content": "View latest order" }]'>
        <PAvatar slot="media" size="medium" customer="" name="Laravel" />
        <div class="resource-list-item">
          <div class="resource-list-item__book--name">
            <p>Laravel</p>
          </div>
          <div class="resource-list-item__resource--status">
            <h3>
              <PTextStyle variation="subdued">Pending</PTextStyle>
            </h3>
          </div>
        </div>
      </PResourceListItem>
      <PResourceListItem :checked="false" selectable :loading="false" :selectMode="false" :id="900" persistActions=""
        :shortcutActions='[{ "content": "View latest order" }]'>
        <PAvatar slot="media" size="medium" customer="" name="Javascript" />
        <div class="resource-list-item">
          <div class="resource-list-item__book--name">
            <p>Javascript</p>
          </div>
          <div class="resource-list-item__resource--status">
            <h3>
              <PTextStyle variation="positive">Published</PTextStyle>
            </h3>
          </div>
        </div>
      </PResourceListItem>
      <PResourceListItem :checked="false" selectable :loading="false" :selectMode="false" :id="1000" persistActions=""
        :shortcutActions='[{ "content": "View latest order" }]'>
        <PAvatar slot="media" size="medium" customer="" name="Angular" />
        <div class="resource-list-item">
          <div class="resource-list-item__book--name">
            <p>Angular</p>
          </div>
          <div class="resource-list-item__resource--status">
            <h3>
              <PTextStyle variation="positive">Published</PTextStyle>
            </h3>
          </div>
        </div>
      </PResourceListItem>
    </PResourceList>
    <PCardSection>
      <PStack distribution="center">
        <PPagination hasNext hasPrevious :total="12" />
      </PStack>
    </PCardSection>
  </PCard>
</template>