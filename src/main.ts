import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import Toast, { PluginOptions } from "vue-toastification";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import { languages, defaultLocale } from "./locales/index";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "vue-toastification/dist/index.css";

require("./assets/main.scss");

const messages = Object.assign(languages);

const i18n = createI18n({
  locale: defaultLocale,
  messages,
});

const toastOptions: PluginOptions = {
  // You can set your default options here
};

const app = createApp(App);

app.use(Toast, toastOptions);
app.use(i18n);
app.use(router);
app.use(store);
app.mount("#app");

export { app, i18n };
