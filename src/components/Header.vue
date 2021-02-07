<template>
  <div class="hero is-medium is-link has-background">
    <img
      alt="Fill banner"
      class="hero-background is-transparent"
      src="https://placeimg.com/1000/500/animals"
    />
    <div class="hero-body">
      <div class="container">
        <p class="title">{{ $t("header.title") }}</p>
        <p class="subtitle">{{ $t("header.subtitle") }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Header extends Vue {}
</script>
<style>
.hero.has-background {
  position: relative;
  overflow: hidden;
}
.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
}
.hero-background.is-transparent {
  opacity: 0.3;
}
</style>
