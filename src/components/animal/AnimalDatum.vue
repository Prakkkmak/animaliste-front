<template>
    <div class="columns">
        <div class="column is-4 has-background-info has-text-left"> {{  $t('animalDetail.' + keyName) }} </div>
        <div class="column has-text-left" v-if="!edit" @click="edit = true">
          <p v-if="value">{{  value }}</p>
          <p v-else>{{ $t('animalDetail.noData')}}</p>
        </div>
        <div v-else class="column">
          <div class="columns">
            <div class="column">
              <div class="field">
                <div class="control">
                  <input class="input is-primary" type="text" v-model="newValue">
                </div>
              </div>
            </div>
            <div class="column">
              <button class="button is-success" @click="updateField">
              <span class="icon is-small">
                <i class="fas fa-check"></i>
              </span>
                <span>Save</span>
              </button>
              <button class="button is-danger is-outlined"  @click="edit = false">
                <span>Delete</span>
                <span class="icon is-small">
                <i class="fas fa-times"></i>
              </span>
              </button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['keyName', 'value'],
    data(){
      return {
        edit: false,
        newValue: this.value
      }
    },
    methods:{
      updateField: function(){
        this.edit = false
        if(this.newValue !== this.value){
          const newData = {};
          newData[this.keyName] = this.newValue;
          this.$emit('update-field', newData)
        }
      }
    }
}
</script>