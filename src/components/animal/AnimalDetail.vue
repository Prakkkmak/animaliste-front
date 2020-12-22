<template>
    <div class="columns">
        <div class="column is-1">
            <img src="https://dummyimage.com/320x200/000/fff"/>
        </div>
        <div class="column is-2" v-on:click="() => i = true">
            <p v-if="!i">{{ data.name }}</p>
            <input v-on:keyup.enter="() => i = false" v-if="i" class="input" type="text" :placeholder="data.name">
        </div>
        <div class="column">
            <p>{{ data.specie }}</p>
        </div>
        <div class="column">
            {{ data.id }}
            <p>Enregistré le:{{ data.registerDate }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: ['data'],
    data(){
        return {
            i: false
        }
    }
}
</script>
<style lang="css">
    img {
        max-width:100%;
        height:auto;
        max-height:100%;
    }
</style>