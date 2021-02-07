<template>
  <div>
    <Header />
    <br />
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
    <a href="https://github.com/Prakkkmak">Lévy Marques</a> & Bastien Lamour.
  </footer>
</template>

<script lang="ts">
import Menu from "@/components/menu/Menu.vue";
import Header from "@/components/Header.vue";
import { Vue, Options } from "vue-class-component";

@Options({
  components: {
    Menu,
    Header,
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
}
</style>
