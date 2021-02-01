<template>
  <div>Page en construction, merci de revenir dans une version future :)</div>
  <img
    src="https://omi.uk/wp-content/uploads/2020/05/xUnderConstruction.png.pagespeed.ic.HA9e42B4xH.webp"
    alt="Under Construction"
  />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import toaster from "@/utils/toaster";

export default class UnderConstruction extends Vue {
  mounted() {
    toaster.error("toasts.pageUnderConstruction", { timeout: 2000 });
  }
}
</script>

<style scoped></style>
