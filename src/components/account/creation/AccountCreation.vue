<template>
  <div v-if="accountCreated">
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
export default {
  name: 'AccountCreation',
  data() {
    return {
      mail: '',
      password: '',
      passwordVerification: '',
      errors: [],
      accountCreated: false,
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
      const newAccount = JSON.stringify({
        mail: this.mail,
        password: this.password,
      });
      try {
        const res = await fetch(
          `${process.env.VUE_APP_BASE_URL}/users/register`,
          {
            method: 'POST',
            body: newAccount,
            headers: {
              'content-type': 'application/json',
            },
          }
        );
        this.$store.commit('setToken', res.toString());
      } catch (err) {
        console.log(err);
      } finally {
        this.mail = '';
        this.password = '';
        this.passwordVerification = '';
        this.accountCreated = true;
      }
    },
  },
};
</script>
