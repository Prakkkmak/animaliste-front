<template>
    <div class="column">
        <div @click="extended = !extended" class="column is-clickable has-background-primary">{{ data.name }}</div>
        <div v-if="extended" class="column">
           <div class="columns">
               <div class="column">
                    <AnimalDatum keyName="name" :value="data.name" @update-field="updateAnimal"/>
                    <AnimalDatum v-if="data.sex === true" keyName="sex" :value="$t('animalDetail.male')" @update-field="updateAnimal"/>
                    <AnimalDatum v-if="data.sex === false" keyName="sex" :value="$t('animalDetail.female')" @update-field="updateAnimal"/>
                    <AnimalDatum v-else keyName="sex" :value="$t('animalDetail.sex')" @update-field="updateAnimal"/>
                    <AnimalDatum keyName='specie' :value="data.specie" @update-field="updateAnimal"/>
                    <AnimalDatum keyName="race" :value="data.race" @update-field="updateAnimal"/>
                    <AnimalDatum keyName="description" :value="data.description" @update-field="updateAnimal"/>
                    <AnimalDatum keyName="physicalDescription" :value="data.physicalDescription" @update-field="updateAnimal"/>
                    <AnimalDatum keyName="attitudeDescription" :value="data.attitudeDescription" @update-field="updateAnimal"/>
                    <AnimalDatum keyName="likes" :value="data.likes" @update-field="updateAnimal"/>
                    <AnimalDatum keyName="dislikes" :value="data.dislikes" @update-field="updateAnimal"/>
                    <AnimalDatum keyName="vaccines" :value="data.vaccines" @update-field="updateAnimal"/>
                    <AnimalDatum keyName="nutrition" :value="data.nutrition" @update-field="updateAnimal"/>
                    <AnimalDatum keyName="origin" :value="data.origin" @update-field="updateAnimal"/>
                    <AnimalDatum keyName="chip" :value="data.chip" @update-field="updateAnimal"/>
                    <AnimalDatum keyName="registerDate" :value="data.registerDate" @update-field="updateAnimal"/>
                    <AnimalDatum keyName="identifier" :value="data.id" @update-field="updateAnimal"/>
                </div>
                <div class="column is-4">
                    <figure class="image">
                        <img src="https://dummyimage.com/320x200/000/fff"/>
                    </figure>
                    <button @click="deleteAnimal" class="button is-danger">Supprimer</button>
                </div>
           </div> 
        </div>
    </div>
</template>
<script>
import AnimalDatum from './AnimalDatum.vue'
export default {
    components: {
        AnimalDatum
    },
    props: ['data'],
    data() {
        return {
            extended: false
        }
    },
    methods : {
        async deleteAnimal() {
            try {
                await fetch(process.env.VUE_APP_BASE_URL + '/animals/'+ this.data.id, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    }
                });
                this.$emit('delete-animal', this.data.id)
            }
            catch(err){
                console.log(err);
            }
        },
      async updateAnimal(newData) {
        this.$emit('update-animal', this.data.id, newData)
        try {
          await fetch(process.env.VUE_APP_BASE_URL + '/animals/'+ this.data.id, {
            method: 'PUT',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(this.data)
          });
        }
        catch(err){
          console.log(err);
        }
      },
    }
    
}
</script>