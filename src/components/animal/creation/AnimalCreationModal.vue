<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ $t("animalCreation.addAnimal") }}</p>
        <button
          class="delete"
          aria-label="delete"
          @click="$emit('close')"
        ></button>
      </header>
      <section class="modal-card-body">
        <AnimalCreationForm @on-exit="this.animalCreated" />
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="this.onClose">
          {{ $t("button.cancel") }}
        </button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import "reflect-metadata";
import { Emit } from "vue-property-decorator";
import AnimalCreationForm from "./AnimalCreationForm.vue";

@Options({
  components: {
    AnimalCreationForm,
  },
})
export default class AnimalCreationModal extends Vue {
  @Emit()
  animalCreated() {
    this.onClose();
  }

  @Emit()
  onClose() {}
}
</script>

<style scoped></style>
