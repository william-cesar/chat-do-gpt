import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import ToastService from 'primevue/toastservice'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Aura
    }
  })
  .use(ToastService)

app.mount('#app')
