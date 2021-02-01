<template>
  <div class="column is-8 has-text-left" v-if="!edit">
    <p v-if="data">{{ data }}</p>
    <p v-else>{{ $t("animalDetail.noData") }}</p>
  </div>
  <div v-else class="column">
    <div class="field">
      <div class="control">
        <input
          class="input is-primary"
          type="text"
          :value="newValue"
          @blur="sendNewValue"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "edit"],
  emits: ["update"],
  data() {
    return {
      newValue: this.data,
    };
  },
  methods: {
    sendNewValue() {
      this.$emit("update", this.newValue);
    },
  },
};
</script>
