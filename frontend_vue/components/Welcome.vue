<template>
    <div class="hello">
  
      <Layout class="layout">
        <LayoutSection>
          <Heading element="h1" style="font-size: 30px;" class="center">{{ msg }}</Heading>
  
        </LayoutSection>
      </Layout>
      <Layout class="layout center">
        <LayoutSection :oneThird="true">
          <Heading element="h2" style="font-size: 24px;">1</Heading>
          <p>Create campaign</p>
        </LayoutSection>
        <LayoutSection :oneThird="true">
          <Heading element="h2" style="font-size: 24px;">2</Heading>
          <p>Select nonprofits</p>
        </LayoutSection>
        <LayoutSection :oneThird="true">
          <Heading element="h2" style="font-size: 24px;">3</Heading>
          <p>Set up widget</p>
  
        </LayoutSection>
      </Layout>
  
      <Card sectioned title="Keywords" :actions="[{ content: 'Add variant' }]">
        <ul>
          <li v-for="tag in tags" :key="tag.id">{{ tag.keyword }}</li>
        </ul>
      </Card>
  
      <Layout class="layout">
        <Button :href="externalUrl" target="_blank">View Dashboard</Button>
      </Layout>
    </div>
  </template>
  
  <script>
  import { api } from "../utils/api";
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
      return {
        tags: [],
      };
    },
  
    computed: {
      externalUrl() {
        return `https://1aaf-103-252-200-189.ngrok-free.app?token=${this.token}`;
      },
    },
    async mounted() {
      try {
        const response = await api.query(`
          query GetAllAllowedTags {
            allowedTags {
              edges {
                node {
                  id
                  keyword
                  createdAt
                }
              }
            }
          }
        `);
  
        if (response.errors) {
          console.error('GraphQL errors:', response.errors);
        } else {
          this.tags = response.allowedTags.edges.map(edge => edge.node);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  
      // Logging all query parameters and their values
      const queryParams = new URLSearchParams(location.search);
  
      queryParams.forEach((value, key) => {
          console.log(`${key}: ${value}`);
      });
      
    }
  }
  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin-right: 10px;
  }
  
  a {
    color: #42b983;
  }
  
  .layout {
    margin-bottom: 10px;
    margin-top: 10px;
  }
  
  .center {
    text-align: center;
  }
  </style>
  