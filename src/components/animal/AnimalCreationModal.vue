<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Ajout d'un animal</p>
        <button
          class="delete"
          aria-label="delete"
          @click="$emit('close')"
        ></button>
      </header>
      <section class="modal-card-body">
        <AnimalCreationForm @exit="validateCreationAndReload" />
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="this.$emit('close')">Annuler</button>
      </footer>
    </div>
  </div>
</template>

<script>
import AnimalCreationForm from './AnimalCreationForm';

export default {
  components: {
    AnimalCreationForm,
  },
  name: 'AnimalCreationModal',
  emits: ['close', 'animal-created'],
  methods: {
    validateCreationAndReload() {
      this.$emit('close');
      this.$emit('animal-created');
    },
  },
};
</script>

<style scoped></style>
