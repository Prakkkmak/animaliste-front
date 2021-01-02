<template>
    <ul v-if="!loading && data?.length">
        <div v-for="animalDatum in data" :key="animalDatum.id" class="columns">
            <AnimalDetail :data="animalDatum" @delete-animal="deleteAnimal"/>
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
             const res = await fetch(process.env.VUE_APP_BASE_URL + '/animals',{
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
    methods: {
        deleteAnimal(id){
            this.data = this.data.filter(datum => datum.id != id)
        }
    }
}
</script>
