<template>
  <li @click="isPopUpOpen = true">
    <a>{{ $t("menu.createAnimal") }}</a>
  </li>
  <AnimalCreationModal
    v-show="isPopUpOpen"
    @onClose="isPopUpOpen = false"
    @animalCreated="onAnimalCreated"
  />
</template>

<script lang="ts">
import AnimalCreationModal from "@/components/animal/creation/AnimalCreationModal.vue";
import { Options, Vue } from "vue-class-component";
import { Emit } from "vue-property-decorator";

@Options({
  components: {
    AnimalCreationModal,
  },
})
export default class AnimalCreationMenu extends Vue {
  private isPopUpOpen: Boolean = false;

  onAnimalCreated() {
    this.isPopUpOpen = false;
    this.animalCreated();
  }

  @Emit()
  animalCreated() {}
}
</script>

<style scoped></style>
