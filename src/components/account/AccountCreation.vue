<template>
  <div v-if="errors.length">
    <b>Please correct the following error(s):</b>
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
    <p class="control has-icons-left">
      <input
        class="input"
        type="password"
        :placeholder="$t('account.password')"
        v-model="passwordVerification"
      />
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </p>
  </div>
  <div class="field">
    <p class="control">
      <button class="button is-success" @click="createAccount">
        {{ $t('account.register') }}
      </button>
    </p>
  </div>
</template>

<script>
import bcryptjs from 'bcryptjs';

export default {
  name: 'AccountCreation',
  data() {
    return {
      mail: '',
      password: '',
      passwordVerification: '',
      errors: [],
    };
  },
  methods: {
    checkForm() {
      this.errors = [];
      if (this.mail.length < 5 || !this.mail.includes('@')) {
        this.errors.push(this.$t('account.errorMail'));
      }
      if (
        this.password.length < 8 ||
        this.password !== this.passwordVerification
      ) {
        this.errors.push(this.$t('account.errorPassword'));
      }
      return this.errors.length === 0;
    },
    async createAccount() {
      if (!this.checkForm()) return;
      try {
        await fetch(process.env.VUE_APP_BASE_URL + '/accounts', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: {
            mail: this.mail,
            password: this.hashPassword(this.password),
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
    async hashPassword(password) {
      return bcryptjs.hash(password, 10);
    },
  },
};
</script>
