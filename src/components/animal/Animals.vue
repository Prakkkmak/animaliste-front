<template>
    <ul v-if="!loading && data?.length">
        <div v-for="animalDatum in data" :key="animalDatum.id" class="columns">
            <AnimalDetail :data="animalDatum"/>
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
