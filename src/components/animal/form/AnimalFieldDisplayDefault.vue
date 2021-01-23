<template>
  <p v-if="data">{{ data }}</p>
  <p v-else>{{ $t('animalDetail.noData') }}</p>
</template>

<script>
export default {
  props: ['data'],
};
</script>
