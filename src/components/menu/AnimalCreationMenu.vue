<template>
  <li @click="isPopUpOpen = true">
    <a>{{ $t("menu.createAnimal") }}</a>
  </li>
  <AnimalCreationModal
    v-show="isPopUpOpen"
    @close="isPopUpOpen = false"
    @animal-created="onAnimalCreated"
  />
</template>

<script lang="ts">
import AnimalCreationModal from "@/animal/creation/AnimalCreationModal.vue";
import { Vue } from "vue-class-component";
import { Emit } from "vue-property-decorator";

@Option({
  components: {
    AnimalCreationModal
  }
})

export default class AnimalCreationMenu extends Vue{
  private isPopUpOpen : Boolean = false;

  onAnimalCreated() {
    this.isPopUpOpen = false;
    this.animalCreated();
  }

  @Emit()
  animalCreated(){}
}
</script>

<style scoped></style>
