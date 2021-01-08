<template>
  <div id="app">
    <div class="columns">
      <div class="column is-2">
        <Menu />
      </div>
      <div class="column">
        <AccountCreation />
        <AnimalCreation @animal-created="updateList" />
        <Animals :key="animalListKey" />
      </div>
    </div>
  </div>
</template>

<script>
import Animals from './components/animal/Animals.vue'
import AnimalCreation from './components/animal/AnimalCreation.vue'
import AccountCreation from "./components/account/AccountCreation";
import Menu from "./components/menu/Menu";

export default {
  name: 'App',
  components: {
    Menu,
    AccountCreation,
    Animals,
    AnimalCreation
  },
  data(){
    return {
      animalListKey: 1,
    }
  },
  methods: {
    updateList(){
      this.animalListKey = this.animalListKey + 1;
    }
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
