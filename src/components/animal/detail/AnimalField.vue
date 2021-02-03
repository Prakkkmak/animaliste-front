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
  private readonly fieldData: Object | undefined;

  @Prop(Boolean)
  private readonly edit: Boolean | undefined;

  @Prop(String)
  private readonly displayComponent: String = "";

  private display = this.displayComponent
    ? this.displayComponent
    : AnimalFieldDisplayDefault;

  updateField(newValue) {
    if (newValue !== this.fieldData.value) {
      const newData = {};
      newData[this.fieldData.key] = newValue;
      this.fieldUpdated();
    }
  }

  @Emit()
  fieldUpdated(){}
}
</script>
