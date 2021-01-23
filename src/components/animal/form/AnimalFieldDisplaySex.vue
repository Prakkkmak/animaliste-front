<template>
  <p v-if="this.data !== undefined">{{ showSexValue() }}</p>
  <p v-else>{{ $t('animalDetail.noData') }}</p>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    showSexValue() {
      if (this.data) return this.$t('animalDetail.male');
      return this.$t('animalDetail.female');
    },
  },
};
</script>
