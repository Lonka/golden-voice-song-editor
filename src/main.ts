import { createApp } from 'vue'
import pinia from './modules/pinia'
import './style.css'
import App from './App.vue'
import './samples/node-api'

createApp(App)
  .use(pinia)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
