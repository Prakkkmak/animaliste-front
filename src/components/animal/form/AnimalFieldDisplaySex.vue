<template>
  <div v-if="!edit">
    <p v-if="this.value !== undefined">{{ this.showSexValue() }}</p>
    <p v-else>{{ $t("animalDetail.noData") }}</p>
  </div>
  <div v-else>
    <div class="field">
      <div class="control">
        <div class="select is-primary">
          <label>
            <select v-model="newValue">
              <option :value="true">{{ $t("animalDetail.male") }}</option>
              <option :value="false">{{ $t("animalDetail.female") }}</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import "reflect-metadata";
import { Prop, Watch } from "vue-property-decorator";

@Options({
  emits: ["update"],
})
export default class AnimalFieldDisplaySex extends Vue {
  @Prop() readonly value!: boolean;

  @Prop() readonly edit!: boolean;

  private newValue: boolean = this.value;

  showSexValue(): String {
    if (this.value) return "Mâle";
    return "Femelle";
  }

  @Watch("newValue")
  onNewValueChange() {
    this.$emit("update", this.newValue);
  }
}
</script>
