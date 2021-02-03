<template>
  <div class="columns">
    <div class="column is-2">
      <label class="label">{{ $t("animalDetail.name") }}</label>
      <input
        class="input is-primary"
        v-model="animal.name"
        type="text"
        placeholder="Chachounet"
      />
    </div>
    <div class="column is-2">
      <label class="label">{{ $t("animalDetail.specie") }}</label>
      <input
        class="input is-primary"
        v-model="animal.specie"
        type="text"
        placeholder="Chat"
      />
    </div>
    <div class="column is-3">
      <label class="label">{{ $t("animalDetail.sex") }}</label>
      <div class="select is-primary">
        <select v-model="animal.sex">
          <option
            v-for="option in sexes"
            :value="option === 'Mâle' ? true : false"
            :key="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
    </div>
    <div class="column is-4">
      <br />
      <button class="button is-success" @click="createAnimal">
        {{ $t("save") }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import animalApi from "@/api/animal.api";
import toaster from "@/utils/toaster";
import { Vue } from "vue-class-component";
import "reflect-metadata";
import { Emit } from "vue-property-decorator";

export default class AnimalCreationForm extends Vue {
  private readonly sexes = ["Mâle", "Femelle"];

  private animal = {};

  @Emit("on-exit")
  async createAnimal() {
    try {
      await animalApi.createAnimal(this.animal);
    } catch (err) {
      toaster.error("toasts.error.unknownError");
    }
  }
}
</script>
