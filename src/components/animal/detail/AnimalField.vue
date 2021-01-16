<template>
  <div class="columns">
    <div class="column is-4 has-background-info has-text-left">
      {{ $t('animalDetail.' + fieldData.key) }}
    </div>
    <div class="column is-8 has-text-left" v-if="!edit">
      <p v-if="fieldData.key === 'sex'">{{ showSexValue() }}</p>
      <p v-else-if="fieldData.value">{{ fieldData.value }}</p>
      <p v-else>{{ $t('animalDetail.noData') }}</p>
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
export default {
  props: ['fieldData', 'edit'],
  emits: ['update-field'],
  data() {
    return {
      newValue: this.fieldData.value,
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
    showSexValue() {
      if (this.fieldData.value) return this.$t('animalDetail.male');
      return this.$t('animalDetail.female');
    },
  },
};
</script>
