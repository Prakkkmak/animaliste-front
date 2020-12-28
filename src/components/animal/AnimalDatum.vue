<template>
    <div class="columns">
        <div class="column is-4 has-background-info has-text-left"> {{  label }}</div>
        <div v-if="value" class="column has-text-left" >{{  value }}</div>
        <div v-else class="column has-text-left" >{{ $t('animalDetail.noData')}}</div>
    </div>
</template>

<script>
export default {
    props: ['label', 'value'],
}
</script>