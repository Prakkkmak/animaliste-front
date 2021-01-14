<template>
  <div id="app">
    <AccountCreation />
    <AnimalCreation @animalCreated="updateList" />
    <Animals :key="animalListKey" />
  </div>
</template>

<script>
import Animals from './components/animal/Animals.vue';
import AnimalCreation from './components/animal/AnimalCreation.vue';
import AccountCreation from './components/account/AccountCreation';

export default {
  name: 'App',
  components: {
    AccountCreation,
    Animals,
    AnimalCreation,
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
