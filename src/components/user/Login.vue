<template>
  <div v-if="errors.length">
    <b>{{ $t("user.errorsText") }}</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </div>
  <div class="field">
    <p class="control has-icons-left has-icons-right">
      <label>
        <input
          class="input"
          type="email"
          :placeholder="$t('user.mail')"
          v-model="mail"
        />
      </label>
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
      <label>
        <input
          class="input"
          type="password"
          :placeholder="$t('user.password')"
          v-model="password"
        />
      </label>
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </p>
  </div>
  <div class="field">
    <p class="control">
      <button class="button is-success" @click="login">
        {{ $t("user.login") }}
      </button>
    </p>
  </div>
</template>

<script lang="ts">
import userApi from "@/api/user.api";
import { Vue } from "vue-class-component";
import { Emit } from "vue-property-decorator";
import toaster from "@/utils/toaster";
import router from "@/router";

export default class Login extends Vue {
  private mail: string = "";

  private password: string = "";

  private errors: Array<string> = [];

  checkForm() {
    this.errors = [];
    if (this.mail.length < 5 || !this.mail.includes("@"))
      this.errors.push(this.$t("user.errorMail"));
    if (this.password.length < 8)
      this.errors.push(this.$t("user.errorPasswordForm"));
    return this.errors.length === 0;
  }

  async login() {
    if (!this.checkForm()) return;
    try {
      const res = await userApi.login(this.mail, this.password);
      const token = res.data;
      this.$store.commit("setToken", token);
      toaster.success("toast.success.login");
      await router.push("/");
      this.onLogin(token);
    } catch (err) {
      toaster.error();
    } finally {
      this.mail = "";
      this.password = "";
    }
  }

  @Emit()
  onLogin(token: string) {
    return token;
  }
}
</script>
