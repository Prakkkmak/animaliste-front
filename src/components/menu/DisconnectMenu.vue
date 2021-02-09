<template>
  <li @click="disconnect">
    <a>{{ $t("menu.disconnect") }}</a>
  </li>
</template>

<script lang="ts">
import router from "@/router";
import { Vue } from "vue-class-component";
import toaster from "@/utils/toaster";

export default class DisconnectMenu extends Vue {
  async disconnect() {
    this.$store.commit("setToken", null);
    toaster.success("toast.success.disconnect");
    await router.push("/login");
  }
}
</script>
