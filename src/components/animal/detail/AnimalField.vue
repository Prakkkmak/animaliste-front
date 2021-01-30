<template>
  <div class="columns">
    <div class="column is-4 has-background-info has-text-left">
      {{ $t('animalDetail.' + fieldData.key) }}
    </div>
    <component
      :is="display"
      :data="fieldData.value"
      :edit="edit"
      @update="updateField"
    />
  </div>
</template>

<script>
import AnimalFieldDisplayDefault from '../form/AnimalFieldDisplayDefault.vue';

export default {
  props: ['fieldData', 'edit', 'displayComponent'],
  emits: ['update-field'],
  data() {
    return {
      display: this.displayComponent
        ? this.displayComponent
        : AnimalFieldDisplayDefault,
    };
  },
  methods: {
    updateField(newValue) {
      if (newValue !== this.fieldData.value) {
        const newData = {};
        newData[this.fieldData.key] = newValue;
        this.$emit('update-field', newData);
      }
    },
  },
};
</script>
