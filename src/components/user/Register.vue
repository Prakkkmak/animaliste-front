<template>
  <div v-if="errors.length">
    <b>{{ $t("user.errorsText") }}</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </div>
  <div class="field">
    <p class="control has-icons-left has-icons-right">
      <input
        class="input"
        type="email"
        :placeholder="$t('user.mail')"
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
        :placeholder="$t('user.password')"
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
        :placeholder="$t('user.password')"
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
        {{ $t("user.register") }}
      </button>
    </p>
  </div>
</template>

<script lang="ts">
import userApi from "@/api/user.api";
import toaster from "@/utils/toaster";
import { Vue } from "vue-class-component";

export default class Register extends Vue {
  private mail: string = "";

  private password: string = "";

  private passwordVerification: string = "";

  private errors: Array<string> = [];

  checkForm() {
    this.errors = [];
    if (this.mail.length < 5 || !this.mail.includes("@"))
      this.errors.push(this.$t("user.errorMail"));
    if (this.password.length < 8)
      this.errors.push(this.$t("user.errorPasswordForm"));
    if (this.password !== this.passwordVerification)
      this.errors.push(this.$t("user.errorPasswordMismatch"));
    return this.errors.length === 0;
  }

  async createAccount() {
    if (!this.checkForm()) return;
    try {
      const res = await userApi.register(this.mail, this.password);
      const token = res.data;
      this.$store.commit("setToken", token);
      toaster.success("toast.success.accountCreated");
    } catch (err) {
      toaster.error("toast.error.unknownError");
    } finally {
      this.mail = "";
      this.password = "";
      this.passwordVerification = "";
      this.errors = [];
    }
  }
}
</script>
