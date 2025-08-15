import { createApp } from 'vue'

import 'virtual:uno.css'
import "@/assets/styles/index.scss";

import App from './App.vue'
import router from './router'
import pinia from './stores'
import i18n from './locales'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(i18n)

app.mount('#app')
