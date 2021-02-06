<template>
  <div class="hero is-primary has-background">
    <img
      alt="Fill banner"
      class="hero-background is-transparent"
      src="https://placem.at/things?w=1024&h=200&txt=Filler+image+banner+1024+x+200&random=1"
    />
    <div class="hero-body">
      <div class="container">
        <p class="title">{{ $t("header.title") }}</p>
        <p class="subtitle">{{ $t("header.subtitle") }}</p>
      </div>
    </div>
  </div>
  <div>
    <div class="columns">
      <div class="column is-2">
        <Menu />
      </div>
      <div class="column">
        <router-view />
      </div>
    </div>
  </div>
  <footer class="footer">
    <strong>Animaliste</strong> by
    <a href="https://github.com/Prakkkmak">Lévy Marque</a> & Bastien Lamour.
  </footer>
</template>

<script lang="ts">
import Menu from "@/components/menu/Menu.vue";
import { Vue, Options } from "vue-class-component";

@Options({
  components: {
    Menu,
  },
})
export default class App extends Vue {
  mounted() {
    if (this.$store.state.token) {
      this.account = this.$store.state.token;
    }
  }

  private account = null;

  accountLogin(account: any) {
    this.account = account;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
