<template>
    <h1> Fetch text </h1>
    <ul v-if="!loading && data && data.length">
        <li v-for="animal of data" :key="animal.id">
            <p><strong>data.name</strong></p>
            <p></p>
        </li>
    </ul>
    <p v-if="loading">
        Still loading..
    </p>
    <p v-if="error">
        Error
    </p>
</template>

<script>
import { ref, computed } from "vue";
export default {
    name: 'Animals',
    props: {

    },
    setup(){
        const data = ref(null);
        const loading = ref(true);
        const error = ref(null);

        function fetchData(){
            loading.value = true;
            return fetch('http://localhost:8080/animals',{
                method: 'get',
                headers: {
                    'content-type': 'applicaiton/json'
                }
            }).then(json => {
                data.value = json.data;
            }).catch(err => {
                error.value = err;
                if(err.json){
                    return err.json.then(json => {
                        error.value.message.json.message
                    })
                }
            }).then(() => {
                loading.value = false
            })
        }

        onMounted(() => {
            fetchData();
        });

        return {
            data,
            loading,
            error
        };
    }
}
</script>