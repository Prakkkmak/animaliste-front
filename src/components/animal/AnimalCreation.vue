<template>
  <div class="columns has-background-light">
    <div class="column is-1">
      <button class="button is-primary" @click="isPopUpOpen = !isPopUpOpen">
        {{ $t('animalCreation.newAnimal') }}
      </button>
    </div>
  </div>
  <div class="modal is-active" v-show="isPopUpOpen">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ $t('animalCreation.addAnimal') }}</p>
        <button
          class="delete"
          aria-label="delete"
          @click="isPopUpOpen = !isPopUpOpen"
        ></button>
      </header>
      <section class="modal-card-body">
        <AnimalCreationDetail @exit="validateCreationAndReload" />
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="isPopUpOpen = !isPopUpOpen">
          {{ $t('button.cancel') }}
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import AnimalCreationDetail from './AnimalCreationDetail.vue';

export default {
  emits: ['animalCreated'],
  components: {
    AnimalCreationDetail,
  },
  data() {
    return {
      isPopUpOpen: false,
    };
  },
  methods: {
    validateCreationAndReload() {
      this.isPopUpOpen = !this.isPopUpOpen;
      this.$emit('animalCreated');
    },
  },
};
</script>
