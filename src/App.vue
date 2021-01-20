<template>
  <p>token : {{ $store.state.token }}</p>
  <div v-if="!account">
    <AccountLogin @account-login="accountLogin" />
  </div>
  <div v-else>
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

<script>
import Menu from '@/components/menu/Menu.vue';
import AccountLogin from '@/components/account/AccountLogin';

export default {
  name: 'App',
  components: {
    AccountLogin,
    Menu,
  },
  mounted() {
    if (this.$store.state.token) {
      this.account = this.$store.state.token;
    }
  },
  data() {
    return {
      animalListKey: 1,
      account: null,
    };
  },
  methods: {
    accountLogin(account) {
      this.account = account;
    },
  },
};
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
