<template>
    <div class="columns has-background-light">
        <div class="column is-1">
            <button class="button is-primary" v-on:click="isPopUpOpen = !isPopUpOpen">Nouvel animal</button>
        </div>
    </div>

    <div class="modal is-active" v-show="isPopUpOpen">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Ajout d'un animal</p>
                <button class="delete" aria-label="delete" v-on:click="isPopUpOpen = !isPopUpOpen"></button>
            </header>
            <section class="modal-card-body">
                <AnimalCreationDetail />
            </section>
            <footer class="modal-card-foot">
                <buton class="button" v-on:click="isPopUpOpen = !isPopUpOpen">Annuler</buton>
            </footer>
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
            isPopUpOpen: false
        }
    }
}
</script>

<style>

</style>