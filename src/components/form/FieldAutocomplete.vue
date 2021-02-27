<!--https://stackoverflow.com/questions/51637551/attaching-a-dropdown-to-text-input-using-bulma -->
<!--
Pour utiliser ce champ, il suffit de lui passer une liste de choix (choices) en paramètre.
Il renvoie les mises à jour du champ input.
-->
<template>
  <div class="dropdown is-active is-fluid">
    <div class="dropdown-trigger">
      <input
        @blur="focus = false"
        @focus="focus = true"
        v-model="value"
        class="input"
        @input="$emit('update', value)"
      />
    </div>
    <div v-if="focus" class="dropdown-menu" id="dropdown-menu" role="menu">
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
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Options({
  emits: ["update"],
})
export default class FieldAutocomplete extends Vue {
  @Prop() private choices: Array<string> = [];

  private dropdownItems: Array<string> = this.choices;

  private value: string = "";

  private focus: boolean = false;

  /**
   * Filtre les choix contenant et étant différent de la valeur de 'choice'
   */
  filterChoices(): Array<string> {
    return this.choices.filter(
      (choice) => choice.includes(this.value) && !(choice === this.value)
    );
  }
}
</script>

<style scoped></style>
