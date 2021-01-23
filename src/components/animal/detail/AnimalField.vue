<template>
  <div class="columns">
    <div class="column is-4 has-background-info has-text-left">
      {{ $t('animalDetail.' + fieldData.key) }}
    </div>
    <div class="column is-8 has-text-left" v-if="!edit">
      <component :is="display" :data="fieldData.value" />
    </div>
    <div v-else class="column">
      <div class="field">
        <div class="control">
          <input
            class="input is-primary"
            type="text"
            v-model="newValue"
            @blur="updateField"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimalFieldDisplayDefault from '../form/AnimalFieldDisplayDefault.vue';

export default {
  components: {
    AnimalFieldDisplayDefault,
  },
  props: ['fieldData', 'edit', 'displayComponent', 'fieldComponent'],
  emits: ['update-field'],
  data() {
    return {
      newValue: this.fieldData.value,
      display: this.displayComponent
        ? this.displayComponent
        : AnimalFieldDisplayDefault,
    };
  },
  methods: {
    updateField() {
      if (this.newValue !== this.fieldData.value) {
        const newData = {};
        newData[this.fieldData.key] = this.newValue;
        this.$emit('update-field', newData);
      }
    },
  },
};
</script>
