<template>
  <div v-if="accountCreated">
    <b> {{ $t("account.accountCreated") }} </b>
  </div>
  <div v-if="errors.length">
    <b>{{ $t("account.errorsText") }}</b>
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
        {{ $t("account.register") }}
      </button>
    </p>
  </div>
</template>

<script lang="ts">
import { register } from "@/api/user.api";
import toaster from "@/utils/toaster";
import { Vue } from "vue-class-component";

export default class AccountRegister extends Vue {
  private mail: string = "";

  private password: string = "";

  private passwordVerification: string = "";

  private errors: Array<string> = [];

  private accountCreated: boolean = false;

  data() {
    return {
      mail: "",
      password: "",
      passwordVerification: "",
      errors: [],
      accountCreated: false,
    };
  }

  checkForm() {
    this.errors = [];
    if (this.mail.length < 5 || !this.mail.includes("@"))
      this.errors.push(this.$t("account.errorMail"));
    if (this.password.length < 8)
      this.errors.push(this.$t("account.errorPasswordForm"));
    if (this.password !== this.passwordVerification)
      this.errors.push(this.$t("account.errorPasswordMismatch"));
    return this.errors.length === 0;
  }

  async createAccount() {
    if (!this.checkForm()) return;
    try {
      const res = await register(this.mail, this.password);
      const token = res.data;
      this.$store.commit("setToken", token);
      toaster.success("toasts.success.accountCreated");
    } catch (err) {
      toaster.error("toasts.error.unknownError");
    } finally {
      this.mail = "";
      this.password = "";
      this.passwordVerification = "";
      this.accountCreated = true;
      this.errors = [];
    }
  }
}
</script>
