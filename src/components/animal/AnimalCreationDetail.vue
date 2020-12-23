<template>
  <div class="columns">
    <div class="column is-1">
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
                    :value="option"
                    :key="option"
                    :selected='option === "femelle" ? true : false'
                >{{ option }}</option>
            </select>
        </div>
    </div>
    <div class="column is-4">
        <br/>
        <button class="button is-primary" v-on:click="createAnimal">Enregistrer</button>
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
            animal: {
                name: "",
                specie: "",
                sex: true
            }
        }
    },
    methods: {
        createAnimal: function(event){
            let newAnimal = JSON.stringify(animal)
            //axios.post()
        }
    }
}
</script>

<style>

</style>