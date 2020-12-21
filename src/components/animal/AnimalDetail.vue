<template>
    <div class="columns">
        <div class="column is-four-fifths">
            <p>{{ data.name }}</p>
        </div>
        <div class="column">
            <p>{{ data.specie }}</p>
        </div>
        <div class="column">
            <p>Id: {{ data.id }}</p>
            <p>Enregistré le:{{ data.registerDate }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: ['data']
}
</script>
<style lang="">
    
</style>