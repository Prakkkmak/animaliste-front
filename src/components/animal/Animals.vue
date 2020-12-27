<template>
    <ul v-if="!loading && data?.length">
        <div v-for="animalDatum in data" :key="animalDatum.id" class="columns has-background-light mt-2 mx-4">
            <div class="column is-clickable is-1 has-background-primary"  @click="() => animalDatum.extended = !animalDatum.extended">{{ animalDatum.name }} </div>
            <div v-if="!animalDatum.extended" class="column">
                <div class="columns">
                    <div class="column is-1">{{ animalDatum.name }}</div> 
                    <div class="column is-2">{{ animalDatum.name }}</div> 
                    <div class="column">{{ animalDatum.specie }}</div>
                    <div class="column">{{ animalDatum.id }}</div>  
                </div>
            </div>
            <div v-if="animalDatum.extended" class="column">
                <AnimalDetail :data="animalDatum"/>
            </div>
        </div>
    </ul>
    <p v-if="loading">
        Chargement en cours..
    </p>
    <p v-if="error">
        Error
    </p>
</template>

<script>
import AnimalDetail from './AnimalDetail.vue'
export default {
    components: {
        AnimalDetail
    },
    data(){
        return {
            data : [],
            loading: true,
            error: null
        }
    },
    async mounted(){
        this.loading = true;
        try {
             const res = await fetch('http://localhost:8090/animals',{
                method: 'get',
                headers: {
                    'content-type': 'application/json'
                }
            })
            this.data = await res.json()
            this.loading = false;
        }
        catch(err) {
            this.error.value = err;
            if(err.json){
                return err.json.then(json => {
                    this.error.value.message = json.message
                })
            }
        }
    },
}
</script>
