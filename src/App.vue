<template>
  <p>TOKEN ACTUEL : {{ $store.state.token }}</p>
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
</template>

<script lang="ts">
import Menu from "@/components/menu/Menu.vue";
import {Options, Vue} from "vue-class-component";

@Options({
  components: {
    Menu,
  }
});

export default class App extends Vue{
  mounted() {
    if (this.$store.state.token) {
      this.account = this.$store.state.token;
    }
  }

  private account = null;

  accountLogin(account) {
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
</style>
