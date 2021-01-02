<template>
    <div class="column">
        <div @click="extended = !extended" class="column is-clickable has-background-primary">{{ data.name }}</div>
        <div v-if="extended" class="column">
           <div class="columns">
               <div class="column">
                    <AnimalDatum :label="$t('animalDetail.name')" :value="data.name"/>
                    <AnimalDatum v-if="data.sex === true" :label="$t('animalDetail.sex')" :value="$t('animalDetail.male')"/>
                    <AnimalDatum v-if="data.sex === false" :label="$t('animalDetail.sex')" :value="$t('animalDetail.female')"/>
                    <AnimalDatum v-else :label="$t('animalDetail.sex')" :value="$t('animalDetail.sex')"/>
                    <AnimalDatum :label="$t('animalDetail.specie')" :value="data.specie"/>
                    <AnimalDatum :label="$t('animalDetail.race')" :value="data.race"/>
                    <AnimalDatum :label="$t('animalDetail.descritpion')" :value="data.description"/>
                    <AnimalDatum :label="$t('animalDetail.physicalDescription')" :value="data.physicalDescription"/>
                    <AnimalDatum :label="$t('animalDetail.attitudeDescription')" :value="data.attitudeDescription"/>
                    <AnimalDatum :label="$t('animalDetail.likes')" :value="data.likes"/>
                    <AnimalDatum :label="$t('animalDetail.dislikes')" :value="data.dislikes"/>
                    <AnimalDatum :label="$t('animalDetail.vaccines')" :value="data.vaccines"/>
                    <AnimalDatum :label="$t('animalDetail.nutrition')" :value="data.nutrition"/>
                    <AnimalDatum :label="$t('animalDetail.origin')" :value="data.origin"/>
                    <AnimalDatum :label="$t('animalDetail.chip')" :value="data.chip"/>
                    <AnimalDatum :label="$t('animalDetail.registerDate')" :value="data.registerDate"/>
                    <AnimalDatum :label="$t('animalDetail.identifier')" :value="data.id"/>
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
    }
    
}
</script>