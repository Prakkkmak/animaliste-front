<template>
  <div class="column is-8 has-text-left" v-if="!edit">
    <p v-if="this.data !== undefined">{{ showSexValue() }}</p>
    <p v-else>{{ $t("animalDetail.noData") }}</p>
  </div>
  <div v-else class="column">
    <div class="field">
      <div class="control">
        <div class="select is-primary">
          <select v-model="newValue">
            <option :value="true">{{ $t("animalDetail.male") }}</option>
            <option :value="false">{{ $t("animalDetail.female") }}</option>
          </select>
        </div>
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
      newValue: this.showSexValue(),
    };
  },
  methods: {
    showSexValue() {
      if (this.data) return this.$t("animalDetail.male");
      return this.$t("animalDetail.female");
    },
    sendNewValue() {
      this.$emit("update", this.newValue);
    },
  },
};
</script>
