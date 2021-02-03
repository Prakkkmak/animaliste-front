<template>
  <div class="column">
    <div
      @click="extended = !extended"
      class="column is-clickable has-background-primary"
    >
      {{ data.name }}
    </div>
    <div v-if="extended" class="column">
      <div class="columns">
        <div class="column">
          <AnimalDatum
            :fieldData="getFieldData('name')"
            :edit="modification"
            @fieldUpdated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('sex')"
            :edit="modification"
            :displayComponent="animalFieldDisplaySex"
            @fieldUpdated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('specie')"
            :edit="modification"
            @fieldUpdated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('race')"
            :edit="modification"
            @fieldUpdated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('description')"
            :edit="modification"
            @fieldUpdated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('likes')"
            :edit="modification"
            @fieldUpdated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('dislikes')"
            :edit="modification"
            @fieldUpdated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('vaccines')"
            :edit="modification"
            @fieldUpdated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('nutrition')"
            :edit="modification"
            @fieldUpdated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('origin')"
            :edit="modification"
            @fieldUpdated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('chip')"
            :edit="modification"
            @fieldUpdated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('registerDate')"
            :edit="modification"
            @fieldUpdated="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('id')"
            :edit="false"
            @fieldUpdated="updateAnimal"
          />
        </div>
        <div class="column is-4">
          <figure class="image">
            <img src="https://dummyimage.com/320x200/000/fff" />
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
import AnimalFieldDisplaySex from "@/components/animal/form/AnimalFieldDisplaySex";
import toaster from "@/utils/toaster";
import AnimalDatum from "./AnimalField.vue";
import {Vue} from "vue-class-component";
import {Emit, Prop} from "vue-property-decorator";

@Option({
  components: {
    AnimalDatum
  }
})
export default class AnimalDetail extends Vue{
  @Prop(String)
  private readonly id : String | undefined;

  private data = Object.create(null);

  private extended : Boolean = false;

  private loading : Boolean = true;

  private modification : Boolean = false;

  private animalFieldDisplaySex = AnimalFieldDisplaySex;

  async mounted() {
    await this.loadAnimal();
  }

  getFieldData(key) {
    return { key, value: this.data[key] };
  }

  async loadAnimal() {
    this.loading = true;
    try {
      const res = await animalApi.getAnimalById(this.id);
      this.data = res.data;
    } catch (err) {
      toaster.error("toasts.error.unknownError");
    } finally {
      this.loading = false;
      this.modification = false;
    }
  }

  async deleteAnimal() {
    try {
      await animalApi.deleteAnimal(this.data.id);
    } catch (err) {
      toaster.error("toasts.error.unknownError");
    } finally {
      this.animalDeleted(this.data.id)
    }
  }

  updateAnimal(newData) {
    Object.keys(newData).forEach((data) => {
      this.data[data] = newData[data];
    });
    this.modification = true;
    this.animalUpdated();
  }

  cancelModification() {
    this.loadAnimal();
  }

  async saveAnimal() {
    try {
      await animalApi.saveAnimal(this.data.id, this.data);
    } catch (err) {
      toaster.error("toasts.error.unknownError");
    }
    this.modification = false;
  }

  @Emit()
  animalUpdated(){}

  @Emit()
  animalDeleted(id){}
}
</script>
