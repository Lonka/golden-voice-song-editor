import { createApp } from 'vue'
import pinia from './modules/pinia'
import i18n from './modules/i18n'
import './style.css'
import App from './App.vue'
import './samples/node-api'

const vue = createApp(App)

vue.use(i18n)
vue.use(pinia)

vue.mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
