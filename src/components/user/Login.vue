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

export default class Login extends Vue {
  private mail: string = "";

  private password: string = "";

  private errors: Array<string> = [];

  async login() {
    try {
      const res = await userApi.login(this.mail, this.password);
      const token = res.data;
      this.$store.commit("setToken", token);
      this.onLogin(token);
    } catch (err) {
      this.errors.push(err);
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
