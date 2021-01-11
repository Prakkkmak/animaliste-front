<template>
  <div class="columns">
    <div class="column is-2">
        <label class="label">{{ $t('animalDetail.name') }}</label>
        <input class="input is-primary" v-model="animal.name" type="text" placeholder="Chachounet"/>
    </div>
    <div class="column is-2">
        <label class="label">{{ $t('animalDetail.specie') }}</label>
        <input class="input is-primary" v-model="animal.specie" type="text" placeholder="Chat"/>
    </div>
    <div class="column is-3">
        <label class="label">{{ $t('animalDetail.sex') }}</label>
        <div class="select is-primary">
            <select v-model="animal.sex">
                <option
                    v-for="option in sexes"
                    :value="option === 'Mâle'"
                    :key="option"
                >{{ option }}</option>
            </select>
        </div>
    </div>
    <div class="column is-4">
        <br/>
        <button class="button is-success" @click="createAnimal">{{ $t('save') }}</button>
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
            animal: this.emptyAnimal()
        }
    },
    emits: ['exit'],
    methods: {
        async createAnimal(){
            let newAnimal = JSON.stringify(this.animal)
            try{
                await fetch('http://localhost:8090/animals',
                {
                    method: "POST",
                    body: newAnimal,
                    headers: {
                        'content-type': 'application/json'
                    }
                })
            }
            catch(err){
                console.log(err);
            }
            this.animal = this.emptyAnimal();
            this.$emit('exit');
        },
        emptyAnimal(){
          return {
            name: '',
            specie: '',
            sex: false
          }
        }
    }
}
</script>