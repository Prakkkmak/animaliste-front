<template>
    <ul v-if="!loading && data && data.length">
        <div v-for="animal in data" :key="animal.id" class="columns is-clickable has-background-light mt-2">
            <div class="column">
                <div class="columns">
                    <div class="column is-three-quarters">{{ animal.name }}</div> 
                    <div class="column">{{ animal.sex }}</div> 
                    <div class="column">{{ animal.sex }}</div> 
                </div>
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
export default {
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
                    'content-type': 'applicaiton/json'
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
    }        
}
</script>
