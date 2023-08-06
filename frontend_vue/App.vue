<template>
    <AppProvider>
      <Page>
        <img class="center" alt="Vue logo" src="./assets/logo.png">
        <Welcome msg="Welcome to Shopify App"/>
      </Page>
  </AppProvider>
  </template>
  
  <script>
  import Welcome from './components/Welcome.vue'
  
  export default {
    name: 'App',
    components: {
      Welcome
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin-top: 60px;
  }
  
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    /* width: 20%; */
  }
  </style>
    