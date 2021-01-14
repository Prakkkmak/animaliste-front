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
            @update-field="updateAnimal"
          />
          <!-- Cette vue est peut-être à modifier. -->
          <AnimalDatum
            :fieldData="getFieldData('sex')"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('specie')"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('race')"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('description')"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('physicalDescription')"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('attitudeDescription')"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('likes')"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('dislikes')"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('vaccines')"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('nutrition')"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('origin')"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('chip')"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('registerDate')"
            @update-field="updateAnimal"
          />
          <AnimalDatum
            :fieldData="getFieldData('identifier')"
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
          <button class="button is-danger" @click="deleteAnimal">
            {{ $t('button.delete') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AnimalDatum from './AnimalDatum.vue';

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
    };
  },
  async mounted() {
    await this.loadAnimal();
  },
  methods: {
    getFieldData(key) {
      return { key, value: this.data[key], editable: false };
    },
    async loadAnimal() {
      this.loading = true;
      try {
        const res = await fetch(
          `${process.env.VUE_APP_BASE_URL}/animals/${this.id}`,
          {
            method: 'get',
            headers: {
              'content-type': 'application/json',
            },
          }
        );
        this.data = await res.json();
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
        this.modification = false;
      }
    },
    async deleteAnimal() {
      try {
        await fetch(`${process.env.VUE_APP_BASE_URL}/animals/${this.data.id}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
          },
        });
      } catch (err) {
        console.log(err);
      } finally {
        this.$emit('delete-animal', this.data.id);
      }
    },
    updateAnimal(newData) {
      for (const i in newData) {
        this.data[i] = newData[i];
      }
      this.modification = true;
      this.$emit('update_animal', this.data);
    },
    cancelModification() {
      this.loadAnimal();
    },
    async saveAnimal() {
      try {
        await fetch(`${process.env.VUE_APP_BASE_URL}/animals/${this.data.id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(this.data),
        });
      } catch (err) {
        console.log(err);
      }
      this.modification = false;
    },
  },
};
</script>
