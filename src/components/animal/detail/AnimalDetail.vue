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
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('sex')"
            :edit="modification"
            :displayComponent="animalFieldDisplaySex"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('specie')"
            :edit="modification"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('race')"
            :edit="modification"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('description')"
            :edit="modification"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('likes')"
            :edit="modification"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('dislikes')"
            :edit="modification"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('vaccines')"
            :edit="modification"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('nutrition')"
            :edit="modification"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('origin')"
            :edit="modification"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('chip')"
            :edit="modification"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('registerDate')"
            :edit="modification"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('id')"
            :edit="false"
            @update-field="updateAnimal"
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
            {{ $t('button.cancel') }}
          </button>
          <button
            v-if="modification"
            class="button is-success"
            @click="saveAnimal"
          >
            {{ $t('button.save') }}
          </button>
          <button v-else class="button is-warning" @click="modification = true">
            {{ $t('button.modify') }}
          </button>
          <button class="button is-danger" @click="deleteAnimal">
            {{ $t('button.delete') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import animalApi from '@/api/animal.api';
import AnimalFieldDisplaySex from '@/components/animal/form/AnimalFieldDisplaySex';
import AnimalDatum from './AnimalField.vue';

export default {
  components: {
    AnimalDatum,
  },
  props: ['id'],
  emits: ['delete-animal', 'update-animal'],
  data() {
    return {
      data: {},
      extended: false,
      loading: true,
      modification: false,
      animalFieldDisplaySex: AnimalFieldDisplaySex,
    };
  },
  async mounted() {
    await this.loadAnimal();
  },
  methods: {
    getFieldData(key) {
      return { key, value: this.data[key] };
    },
    async loadAnimal() {
      this.loading = true;
      try {
        const res = await animalApi.getAnimalById(this.id);
        this.data = res.data;
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
        this.modification = false;
      }
    },
    async deleteAnimal() {
      try {
        await animalApi.deleteAnimal(this.data.id);
      } catch (err) {
        console.log(err);
      } finally {
        this.$emit('delete-animal', this.data.id);
      }
    },
    updateAnimal(newData) {
      Object.keys(newData).forEach((data) => {
        this.data[data] = newData[data];
      });
      this.modification = true;
      this.$emit('update_animal', this.data);
    },
    cancelModification() {
      this.loadAnimal();
    },
    async saveAnimal() {
      try {
        await animalApi.saveAnimal(this.data.id, this.data);
      } catch (err) {
        console.log(err);
      }
      this.modification = false;
    },
  },
};
</script>
