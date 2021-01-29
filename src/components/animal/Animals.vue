<template>
  <ul v-if="!loading">
    <input
      class="input"
      type="text"
      placeholder=""
      v-model="dataFilterString"
    />
    <div v-for="animal in data" :key="animal.id" class="columns">
      <AnimalDetail
        :id="animal.id"
        @delete-animal="deleteAnimal"
        @update-animal="updateAnimal"
        v-if="!dataFilterString.length || filteredData.includes(animal.id)"
      />
    </div>
  </ul>
  <p v-if="loading">Chargement en cours..</p>
</template>

<script>
import animalApi from '@/api/animal.api';
import AnimalDetail from './detail/AnimalDetail.vue';

export default {
  components: {
    AnimalDetail,
  },
  data() {
    return {
      data: {},
      filteredData: [],
      loading: true,
      dataFilterString: '',
    };
  },
  async mounted() {
    this.loading = true;
    try {
      const res = await animalApi.getAllAnimals();
      this.data = res.data;
    } catch (err) {
      console.log(err);
    } finally {
      this.loading = false;
    }
  },
  watch: {
    dataFilterString() {
      this.filterAnimal();
    },
  },
  methods: {
    deleteAnimal(id) {
      this.data.splice(this.getIndex(id), 1);
    },
    updateAnimal(data) {
      this.data[this.getIndex(data.id)] = data;
    },
    filterAnimal() {
      this.filteredData = [];
      this.data.forEach((animal) => {
        Object.keys(animal).forEach((field) => {
          if (
            typeof animal[field] === 'string' &&
            animal[field].includes(this.dataFilterString)
          ) {
            this.filteredData.push(animal.id);
          }
        });
      });
    },
    getData(id) {
      return this.data.find((animal) => animal.id === id);
    },
    getIndex(id) {
      return this.data.indexOf(this.getData(id));
    },
  },
};
</script>
