<template>
  <div id="app">
    <div class="columns">
      <div class="column is-2">
        <Menu />
      </div>
      <div class="column">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './components/menu/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu,
  },
  data() {
    return {
      animalListKey: 1,
    };
  },
  methods: {
    updateList() {
      this.animalListKey += 1;
    },
  },
};
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
