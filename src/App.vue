<template>
  <div id="app">
    <loader v-if="loading"></loader>
    <router-view/>
  </div>
</template>

<script>
import Loader from './components/Loader'
import globalMixin from './mixins/global'
export default {
  name: 'App',
  components: {
    Loader
  },
  mixins: [
    globalMixin
  ]
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
