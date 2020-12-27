<template>
    <div class="columns has-background-light">
        <div class="column is-1">
            <button class="button is-primary" @click="isPopUpOpen = !isPopUpOpen">Nouvel animal</button>
        </div>
    </div>

    <div class="modal is-active" v-show="isPopUpOpen">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Ajout d'un animal</p>
                <button class="delete" aria-label="delete" @click="isPopUpOpen = !isPopUpOpen"></button>
            </header>
            <section class="modal-card-body">
                <AnimalCreationDetail @exit="validateCreationAndReload"/>
            </section>
            <footer class="modal-card-foot">
                <button class="button" @click="isPopUpOpen = !isPopUpOpen">Annuler</button>
            </footer>
        </div>
    </div>
</template>

<script>
import AnimalCreationDetail from './AnimalCreationDetail.vue'
export default {
    emits: ['animalCreated'],
    components: {
        AnimalCreationDetail
    },
    data(){
        return{
            isPopUpOpen: false
        }
    },
    methods: {
        validateCreationAndReload(){
            this.isPopUpOpen = !this.isPopUpOpen
            this.$emit('animalCreated')
        }
    }
}
</script>

<style>

</style>