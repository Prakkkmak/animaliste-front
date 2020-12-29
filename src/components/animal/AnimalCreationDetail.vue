<template>
  <div class="columns">
    <div class="column is-2">
        <label class="label">Nom :</label>
        <input class="input is-primary" v-model="animal.name" type="text" placeholder="Chachounet"/>
    </div>
    <div class="column is-2">
        <label class="label">Espèce :</label>
        <input class="input is-primary" v-model="animal.specie" type="text" placeholder="Chat"/>
    </div>
    <div class="column is-3">
        <label class="label">Sexe :</label>
        <div class="select is-primary">
            <select v-model="animal.sex">
                <option
                    v-for="option in sexes"
                    :value="option === 'Mâle' ? true : false"
                    :key="option"
                >{{ option }}</option>
            </select>
        </div>
    </div>
    <div class="column is-4">
        <br/>
        <button class="button is-success" @click="createAnimal">Enregistrer</button>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            sexes: [
                "Mâle",
                "Femelle"
            ],
            animal: {},
        }
    },
    methods: {
        async createAnimal(){
            let newAnimal = JSON.stringify(this.animal)
            try{
                let res = await fetch('http://localhost:8090/animals',
                {
                    method: "POST",
                    body: newAnimal,
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                if (res.status == 201)
                    await this.$emit('exit')
            }
            catch(err){
                this.error.value = err;
                if(err.json){
                    return err.json.then(json => {
                        this.error.value.message = json.message
                    })
                }
            }
        }
    }
}
</script>