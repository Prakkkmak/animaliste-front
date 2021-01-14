<template>
  <li @click="isPopUpOpen = true">
    <a>{{ $t('menu.createAnimal') }}</a>
  </li>
  <AnimalCreationModal
    v-show="isPopUpOpen"
    @close="isPopUpOpen = false"
    @animal-created="onAnimalCreated"
  />
</template>

<script>
import AnimalCreationModal from '../animal/AnimalCreationModal';

export default {
  name: 'AnimalCreationMenu',
  components: { AnimalCreationModal },
  data() {
    return {
      isPopUpOpen: false,
    };
  },
  methods: {
    onAnimalCreated() {
      this.isPopUpOpen = false;
      this.$emit('animal-created');
    },
  },
};
</script>

<style scoped></style>
