import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

require('./assets/main.scss');

const i18n = createI18n({
    // shomething vue-i18n options here ...
  })
  
const app = createApp(App)

app.use(i18n)

app.mount('#app')
