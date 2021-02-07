<template>
  <div v-if="!edit">
    <p v-if="value">{{ value }}</p>
    <p v-else>{{ $t("animalDetail.noData") }}</p>
  </div>
  <div v-else>
    <div class="field">
      <div class="control">
        <label>
          <input class="input is-primary" type="text" v-model="newValue" />
        </label>
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
export default class AnimalFieldInputDisplay extends Vue {
  @Prop() readonly value!: string;

  @Prop() readonly edit!: boolean;

  private newValue: string = this.value;

  @Watch("newValue")
  onNewValueChange() {
    this.$emit("update", this.newValue);
  }
}
</script>
