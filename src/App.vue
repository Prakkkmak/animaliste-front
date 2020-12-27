<template>
  <div id="app">
    <AnimalCreation @animalCreated="updateList" />
    <Animals :key="animalListKey" />
  </div>
</template>

<script>
import Animals from './components/animal/Animals.vue'
import AnimalCreation from './components/animal/AnimalCreation.vue'

export default {
  name: 'App',
  components: {
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
      this.animalListKey = this.animalListKey+1
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
