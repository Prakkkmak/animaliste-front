import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import Toasted from 'vue-toasted';
import router from './router';
import store from './store';
import App from './App.vue';
import { languages, defaultLocale } from './locales/index';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

require('./assets/main.scss');

const messages = Object.assign(languages);

const i18n = createI18n({
  locale: defaultLocale,
  messages,
});

const app = createApp(App);

app.use(Toasted);
app.use(i18n);
app.use(router);
app.use(store);
app.mount('#app');
