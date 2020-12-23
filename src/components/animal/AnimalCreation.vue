<template>
    <div class="columns has-background-light">
        <div class="column is-clickable is-1 has-background-primary" v-on:click="() => animalCreation.extended = !animalCreation.extended">Nouvel animal</div>
        <div v-if="!animalCreation.extended" class="column">
            <div class="columns">
                <div class="column is-1">Formulaire</div>
                <div class="column is-2"> d'ajout</div>
                <div class="column is-3"> d'un animal</div>
            </div>
        </div>
        <div v-if="animalCreation.extended" class="column">
            <AnimalCreationDetail />
        </div>
    </div>
</template>

<script>
import AnimalCreationDetail from './AnimalCreationDetail.vue'
export default {
    components: {
        AnimalCreationDetail
    },
    data(){
        return{
            animalCreation: {}
        }
    },
}
</script>

<style>

</style>