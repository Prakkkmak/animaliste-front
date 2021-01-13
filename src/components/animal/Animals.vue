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
import AnimalDetail from './AnimalDetail.vue';

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
      const res = await fetch(process.env.VUE_APP_BASE_URL + '/animals', {
        method: 'get',
        headers: {
          'content-type': 'application/json',
        },
      });
      this.data = await res.json();
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
      console.log(this.getIndex(id));
      this.data.splice(this.getIndex(id), 1);
    },
    updateAnimal(data) {
      this.data[this.getIndex(data.id)] = data;
    },
    filterAnimal() {
      this.filteredData = [];
      Object.keys(this.data).forEach((animal) => {
        Object.keys(animal).forEach((field) => {
          console.log(animal[field]);
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
      this.data.forEach((animal) => {
        if (animal.id === id) return animal;
      });
    },
    getIndex(id) {
      return this.data.indexOf(this.getData(id));
    },
  },
};
</script>
