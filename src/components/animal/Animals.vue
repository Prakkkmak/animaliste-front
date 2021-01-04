<template>
  <ul v-if="!loading && data?.length">
    <div v-for="animalId in data" :key="animalId" class="columns">
      <AnimalDetail :id="animalId" @delete-animal="deleteAnimal"/>
    </div>
  </ul>
  <p v-if="loading">
    Chargement en cours..
  </p>
</template>

<script>
import AnimalDetail from './AnimalDetail.vue'

export default {
  components: {
    AnimalDetail
  },
  data() {
    return {
      data: {},
      loading: true
    }
  },
  async mounted() {
    this.loading = true;
    try {
      const res = await fetch(process.env.VUE_APP_BASE_URL + '/animals', {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        }
      })
      this.data = await res.json()
      this.data = this.data.map((item) => item.id) //Transforme l'array en map
    } catch (err) {
      console.log(err);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    deleteAnimal(id) {
      this.data.delete(id);
    }
  }
}
</script>
