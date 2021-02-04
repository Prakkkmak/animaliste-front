<template>
  <div class="columns has-background-light">
    <div class="column is-1">
      <button class="button is-primary" @click="isPopUpOpen = true">
        {{ $t("animalCreation.newAnimal") }}
      </button>
    </div>
  </div>

  <AnimalCreationModal
    v-show="isPopUpOpen"
    @close="isPopUpOpen = false"
    @animal-created="onAnimalCreated"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import "reflect-metadata";
import { Emit } from "vue-property-decorator";
import AnimalCreationModal from "./AnimalCreationModal.vue";

@Options({
  components: {
    AnimalCreationModal,
  },
})
export default class AnimalCreation extends Vue {
  private isPopUpOpen: boolean = false;

  @Emit()
  onAnimalCreated() {
    this.isPopUpOpen = false;
  }
}
</script>
