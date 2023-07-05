<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import helper from "./js/helper.js";
export default {
  name: 'App',
  mixins: [helper],
  components: {
  },
  mounted() {
    this.goTo('home');
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
