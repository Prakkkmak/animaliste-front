<template>
  <div class="columns">
    <div class="column is-4 has-background-info has-text-left">
      {{ $t("animalDetail." + label) }}
    </div>
    <div v-if="!edit" class="column is-8 has-text-left">
      <p v-if="value">{{ value }}</p>
      <p v-else>{{ $t("animalDetail.noData") }}</p>
    </div>
    <div v-else class="column is-8 has-text-left">
      <FieldAutocomplete
        :choices="choices"
        @update="(newValue) => $emit('update', label, newValue)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import "reflect-metadata";
import { Prop } from "vue-property-decorator";
import specieApi from "@/api/specie.api";
import toaster from "@/utils/toaster";
import AnimalFieldInput from "@/components/animal/form/AnimalFieldInput.vue";
import FieldAutocomplete from "@/components/form/FieldAutocomplete.vue";

@Options({
  emits: ["update"],
  components: {
    AnimalFieldInput,
    FieldAutocomplete,
  },
})
export default class AnimalFieldAutocomplete extends Vue {
  @Prop() readonly label!: string;

  @Prop() readonly value!: string;

  @Prop() readonly edit!: boolean;

  private choices: Array<String> = [];

  mounted() {
    this.getChocies();
  }

  async getChocies() {
    try {
      const res = await specieApi.getAllSpecies();
      const { data } = res;
      this.choices = data;
    } catch (err) {
      toaster.error();
      this.choices = [];
    }
  }
}
</script>
