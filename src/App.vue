<template>
  <div id="app">
    <Animals />  
  </div>
</template>

<script>
import Animals from './components/Animals.vue'

export default {
  name: 'App',
  components: {
    Animals
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
