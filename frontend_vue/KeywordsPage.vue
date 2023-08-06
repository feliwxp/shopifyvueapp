<template>
    <div>
      <h1>Keyword manager</h1>
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="keyword" placeholder="Enter a keyword" />
        <button type="submit">Add keyword</button>
      </form>
      <div v-if="allowedTags.length > 0">
        <h2>Existing keywords</h2>
        <ul>
          <li v-for="tag in allowedTags" :key="tag.id">
            {{ tag.keyword }}
            <button @click="removeTag(tag.id)">Remove</button>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>No keywords added</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        keyword: '',
        allowedTags: [
          // Replace this with your actual data or fetch from API
          { id: 1, keyword: 'Tag 1' },
          { id: 2, keyword: 'Tag 2' },
        ],
      };
    },
    methods: {
      handleSubmit() {
        if (this.keyword.trim() !== '') {
          this.allowedTags.push({
            id: Date.now(),
            keyword: this.keyword.trim(),
          });
          this.keyword = '';
        }
      },
      removeTag(tagId) {
        this.allowedTags = this.allowedTags.filter((tag) => tag.id !== tagId);
      },
    },
  };
  </script>