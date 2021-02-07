<template>
  <div class="column">
    <div
      @click="extended = !extended"
      class="column is-clickable has-background-primary"
    >
      {{ datum.name }}
    </div>
    <div v-if="extended" class="column">
      <div class="columns">
        <div class="column">
          <AnimalDatum
            :fieldData="getFieldData('name')"
            :edit="modification"
            @field-updated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('sex')"
            :edit="modification"
            :displayComponent="animalFieldDisplaySex"
            @field-updated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('specie')"
            :edit="modification"
            @field-updated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('race')"
            :edit="modification"
            @field-updated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('description')"
            :edit="modification"
            @field-updated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('likes')"
            :edit="modification"
            @field-updated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('dislikes')"
            :edit="modification"
            @field-updated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('vaccines')"
            :edit="modification"
            @field-updated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('nutrition')"
            :edit="modification"
            @field-updated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('origin')"
            :edit="modification"
            @field-updated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('chip')"
            :edit="modification"
            @field-updated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('registerDate')"
            :edit="modification"
            @field-updated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('id')"
            :edit="false"
            @field-updated="updateAnimal"
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
import AnimalFieldDisplaySex from "@/components/animal/form/AnimalFieldDisplaySex.vue";
import toaster from "@/utils/toaster";
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";
import Animal from "@/models/Animal";
import AnimalDatum from "./AnimalField.vue";

@Options({
  components: {
    AnimalDatum,
  },
  emits: ["animal-updated"],
})
export default class AnimalDetail extends Vue {
  @Prop(String)
  private readonly id: string = "";

  private datum: Animal = new Animal();

  private extended: Boolean = false;

  private loading: Boolean = true;

  private modification: Boolean = false;

  private animalFieldDisplaySex = AnimalFieldDisplaySex;

  async mounted() {
    await this.loadAnimal();
  }

  getFieldData(key: string) {
    return { key, value: this.datum[key] };
  }

  async loadAnimal() {
    this.loading = true;
    try {
      const res = await animalApi.getAnimalById(this.id);
      this.datum = res.data;
    } catch (err) {
      toaster.error();
    } finally {
      this.loading = false;
      this.modification = false;
    }
  }

  async deleteAnimal() {
    try {
      await animalApi.deleteAnimal(this.datum.id);
    } catch (err) {
      toaster.error();
    } finally {
      this.animalDeleted(this.datum.id);
    }
  }

  updateAnimal(newData: { key: string; value: string }) {
    this.datum[newData.key] = newData.value;
    this.modification = true;
    this.animalUpdated();
  }

  cancelModification() {
    this.loadAnimal();
  }

  async saveAnimal() {
    try {
      await animalApi.saveAnimal(this.datum.id, this.datum);
    } catch (err) {
      toaster.error();
    }
    this.modification = false;
  }

  @Emit()
  animalUpdated() {
    return this.datum;
  }

  @Emit()
  animalDeleted(id: string) {
    return id;
  }
}
</script>
