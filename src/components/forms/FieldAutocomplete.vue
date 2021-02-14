<!--https://stackoverflow.com/questions/51637551/attaching-a-dropdown-to-text-input-using-bulma -->
<template>
  <div class="dropdown is-active">
    <div class="dropdown-trigger">
      <input v-model="value" class="input" @input="$emit('update', value)" />
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div
        class="dropdown-content"
        v-for="choice in filterChoices()"
        :key="choice"
      >
        <a @click="() => (value = choice)" class="dropdown-item">
          {{ choice }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class FieldAutocomplete extends Vue {
  @Prop() private choices: Array<string> = [];

  private dropdownItems: Array<string> = this.choices;

  private value: string = "";

  filterChoices(): Array<string> {
    return this.choices.filter(
      (choice) => choice.includes(this.value) && !(choice === this.value)
    );
  }
}
</script>

<style scoped></style>
