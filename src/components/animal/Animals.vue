<template>
  <ul v-if="!loading">
    <label>
      <input
        class="input"
        type="text"
        placeholder=""
        v-model="dataFilterString"
      />
    </label>
    <div v-for="animal in animals" :key="animal.id" class="columns">
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

<script lang="ts">
import animalApi from "@/api/animal.api";
import { Watch } from "vue-property-decorator";
import { Options, Vue } from "vue-class-component";
import Animal from "@/models/Animal";
import AnimalDetail from "./detail/AnimalDetail.vue";

@Options({
  components: {
    AnimalDetail,
  },
})
class Animals extends Vue {
  private animals: Array<Animal> = [];

  private filteredData: Array<string> = [];

  private loading: boolean = true;

  private dataFilterString: string = "";

  async mounted() {
    this.loading = true;
    try {
      const res = await animalApi.getAllAnimals();
      this.animals = res.data;
    } catch (err) {
      toaster.error();
    } finally {
      this.loading = false;
    }
  }

  deleteAnimal(id: string) {
    this.animals.splice(this.getIndex(id), 1);
  }

  updateAnimal(animal: Animal) {
    this.animals[this.getIndex(animal.id)] = animal;
  }

  getData(id: string): Animal | undefined {
    return this.animals.find((animal) => animal.id === id);
  }

  getIndex(id: string): number {
    const animal = this.getData(id);
    if (animal) return this.animals.indexOf(animal);
    return -1;
  }

  @Watch("dataFilterString")
  filterAnimal() {
    this.filteredData = [];
    this.animals.forEach((animal) => {
      Object.keys(animal).forEach((field) => {
        if (
          typeof animal[field] === "string" &&
          animal[field].includes(this.dataFilterString)
        ) {
          this.filteredData.push(animal.id);
        }
      });
    });
  }
}
export default Animals;
</script>
