<template>
  <div class="column">
    <div
      @click="extended = !extended"
      class="column is-clickable has-background-primary"
    >
      {{ animal.name }}
    </div>
    <div v-if="extended" class="column">
      <div class="columns">
        <div class="column">
          <AnimalFieldInput
            label="name"
            :value="animal.name"
            :edit="modification"
            @update="updateAnimal"
          />

          <AnimalFieldInputSex
            label="sex"
            :value="animal.sex"
            :edit="modification"
            @update="updateAnimal"
          />

          <AnimalFieldInput
            label="specie"
            :value="animal.specie"
            :edit="modification"
            @update="updateAnimal"
          />

          <AnimalFieldInput
            label="race"
            :value="animal.race"
            :edit="modification"
            @update="updateAnimal"
          />

          <AnimalFieldInput
            label="description"
            :value="animal.description"
            :edit="modification"
            @update="updateAnimal"
          />

          <AnimalFieldInput
            label="likes"
            :value="animal.likes"
            :edit="modification"
            @update="updateAnimal"
          />

          <AnimalFieldInput
            label="dislikes"
            :value="animal.dislikes"
            :edit="modification"
            @update="updateAnimal"
          />

          <AnimalFieldInput
            label="vaccines"
            :value="animal.vaccines"
            :edit="modification"
            @update="updateAnimal"
          />

          <AnimalFieldInput
            label="nutrition"
            :value="animal.nutrition"
            :edit="modification"
            @update="updateAnimal"
          />

          <AnimalFieldInput
            label="origin"
            :value="animal.origin"
            :edit="modification"
            @update="updateAnimal"
          />

          <AnimalFieldInput
            label="chip"
            :value="animal.chip"
            :edit="modification"
            @update="updateAnimal"
          />

          <AnimalFieldInput
            label="registerDate"
            :value="animal.registerDate"
            :edit="modification"
            @update="updateAnimal"
          />

          <AnimalFieldInput
            label="id"
            :value="animal.id"
            :edit="false"
            @update="updateAnimal"
          />
        </div>
        <div class="column is-4">
          <figure class="image">
            <img
              src="https://dummyimage.com/320x200/000/fff"
              alt="Picture of {{ datum.name }}"
            />
          </figure>
          <button
            v-if="modification"
            class="button is-warning"
            @click="cancelModification"
          >
            {{ $t("button.cancel") }}
          </button>
          <button
            v-if="modification"
            class="button is-success"
            @click="saveAnimal"
          >
            {{ $t("button.save") }}
          </button>
          <button v-else class="button is-warning" @click="modification = true">
            {{ $t("button.modify") }}
          </button>
          <button class="button is-danger" @click="deleteAnimal">
            {{ $t("button.delete") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import animalApi from "@/api/animal.api";
import AnimalFieldInputSex from "@/components/animal/form/AnimalFieldInputSex.vue";
import AnimalFieldInput from "@/components/animal/form/AnimalFieldInput.vue";
import toaster from "@/utils/toaster";
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";
import Animal from "@/models/Animal";

@Options({
  components: {
    AnimalFieldInput,
    AnimalFieldInputSex,
  },
  emits: ["animal-updated"],
})
export default class AnimalDetail extends Vue {
  @Prop(String)
  private readonly id: string = "";

  private animal: Animal = new Animal();

  private extended: Boolean = false;

  private loading: Boolean = true;

  private modification: Boolean = false;

  private animalFieldDisplaySex = AnimalFieldInputSex;

  async mounted() {
    await this.loadAnimal();
  }

  updateAnimal(key: string, value: string) {
    this.animal[key] = value;
    this.modification = true;
    this.animalUpdated();
  }

  getFieldData(key: string) {
    return { key, value: this.animal[key] };
  }

  async loadAnimal() {
    this.loading = true;
    try {
      const res = await animalApi.getAnimalById(this.id);
      this.animal = res.data;
    } catch (err) {
      toaster.error();
    } finally {
      this.loading = false;
      this.modification = false;
    }
  }

  async deleteAnimal() {
    try {
      await animalApi.deleteAnimal(this.animal.id);
    } catch (err) {
      toaster.error();
    } finally {
      this.animalDeleted(this.animal.id);
    }
  }

  cancelModification() {
    this.loadAnimal();
  }

  async saveAnimal() {
    try {
      await animalApi.saveAnimal(this.animal.id, this.animal);
    } catch (err) {
      toaster.error();
    }
    this.modification = false;
  }

  @Emit()
  animalUpdated() {
    return this.animal;
  }

  @Emit()
  animalDeleted(id: string) {
    return id;
  }
}
</script>
