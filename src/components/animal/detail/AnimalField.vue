<template>
  <div class="columns">
    <div class="column is-4 has-background-info has-text-left">
      {{ $t("animalDetail." + fieldData.key) }}
    </div>
    <div class="column is-8 has-text-left">
      <component
        :is="display"
        :value="fieldData.value"
        :edit="edit"
        @update="fieldUpdated"
      />
    </div>
  </div>
</template>

<script lang="ts">
import AnimalFieldDisplayDefault from "@/components/animal/form/AnimalFieldDisplayDefault.vue";
import { Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

export default class AnimalField extends Vue {
  @Prop(Object)
  private readonly fieldData!: { value: string; key: string };

  @Prop(Boolean)
  private readonly edit!: Boolean;

  @Prop(String)
  private readonly displayComponent!: String;

  private display = this.displayComponent
    ? this.displayComponent
    : AnimalFieldDisplayDefault;

  updateField(newValue: string) {
    if (newValue !== this.fieldData.value) {
      this.fieldUpdated(newValue);
    }
  }

  @Emit()
  fieldUpdated(newValue: string) {
    return newValue;
  }
}
</script>
