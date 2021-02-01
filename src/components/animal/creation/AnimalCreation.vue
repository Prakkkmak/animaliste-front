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

<script>
import AnimalCreationModal from "./AnimalCreationModal";

export default {
  emits: ["animal-created"],
  components: {
    AnimalCreationModal,
  },
  data() {
    return {
      isPopUpOpen: false,
    };
  },
  methods: {
    onAnimalCreated() {
      this.$emit("animal-created");
      this.isPopUpOpen = false;
    },
  },
};
</script>
