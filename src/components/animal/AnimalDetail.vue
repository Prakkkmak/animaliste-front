<template>
    <div class="columns">
        <div class="column is-1">
            <img src="https://dummyimage.com/320x200/000/fff"/>
        </div>
        <div class="column is-2">
            <p v-if="!i">{{ data.name }}</p>
        </div>
        <div class="column has-text-left">
            <p v-for="(datum, index) in data" :key="index"><b>{{ index }}</b> : {{ datum }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: ['data'],
}
</script>
<style lang="css">
    img {
        max-width:100%;
        height:auto;
        max-height:100%;
    }
</style>