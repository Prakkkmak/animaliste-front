<template>
  <div class="columns has-background-light">
    <div class="column is-1">
      <button class="button is-primary" @click="isPopUpOpen = true">
        Nouvel animal
      </button>
    </div>
  </div>

  <AnimalCreationModal
    v-show="isPopUpOpen"
    @animal-created="
      this.$emit('animal-created');
      isPopUpOpen = false;
    "
  />
</template>

<script>
import AnimalCreationModal from './AnimalCreationModal';

export default {
  emits: ['animal-created'],
  components: {
    AnimalCreationModal,
  },
  data() {
    return {
      isPopUpOpen: false,
    };
  },
  methods: {},
};
</script>
