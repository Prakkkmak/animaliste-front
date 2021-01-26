<template>
  <div v-if="accountLogin">
    <b> {{ $t('account.accountCreated') }} </b>
  </div>
  <div v-if="errors.length">
    <b>{{ $t('account.errorsText') }}</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </div>
  <div class="field">
    <p class="control has-icons-left has-icons-right">
      <input
        class="input"
        type="email"
        :placeholder="$t('account.mail')"
        v-model="mail"
      />
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    </p>
  </div>
  <div class="field">
    <p class="control has-icons-left">
      <input
        class="input"
        type="password"
        :placeholder="$t('account.password')"
        v-model="password"
      />
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </p>
  </div>
  <div class="field">
    <p class="control">
      <button class="button is-success" @click="login">
        {{ $t('account.register') }}
      </button>
    </p>
  </div>
</template>

<script>
import httpClient from '@/api/httpClient';
import { login } from '@/api/users.api';

export default {
  name: 'AccountLogin.vue',
  emits: ['account-login'],
  data() {
    return {
      mail: '',
      password: '',
      errors: [],
      accountLogin: false,
    };
  },
  methods: {
    async login() {
      try {
        const res = await login(this.mail, this.password);
        const token = res.data;
        this.$store.commit('setToken', token);
        httpClient.defaults.headers.common.Authorization = token;
        this.$emit('account-login', token);
      } catch (err) {
        this.errors.push(err);
      } finally {
        this.mail = '';
        this.password = '';
        this.accountLogin = true;
      }
    },
  },
};
</script>

<style scoped></style>
