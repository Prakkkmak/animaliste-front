<template>
    <div class="column">
        <div v-on:click="() => extended = !extended" class="column is-clickable has-background-primary">{{ data.name }} </div>
        <div v-if="extended" class="column">
           <div class="columns">
               <div class="column">
                    <div v-for="(datum, index) in data" :key="index" class="columns" >
                        <div v-if="datum" class="column is-2 has-background-info has-text-left"><p>{{ index }}</p></div>
                        <div v-if="datum" class="column has-text-left" >{{ datum }}</div>
                    </div>
                </div>
                <div class="column is-4">
                    <figure class="image">
                        <img src="https://dummyimage.com/320x200/000/fff"/>
                    </figure>
                </div>
           </div> 
        </div>
    </div>
</template>
<script>
export default {
    props: ['data'],
    data() {
        return {
            extended: false
        }
    }
}
</script>