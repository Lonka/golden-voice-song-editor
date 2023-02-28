import { createApp } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import generatedRoutes from '~pages'
import pinia from '~/modules/pinia'
import i18n from '~/modules/i18n'

import '@unocss/reset/tailwind.css'
import '~/style.css'
import 'uno.css'

import App from '~/App.vue'
import '~/samples/node-api'

const router = createRouter({
  // refer to: https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/commonIssues.html
  history: import.meta.env.PROD ? createWebHashHistory() : createWebHistory(import.meta.env.BASE_URL),
  routes: generatedRoutes,
})

const vue = createApp(App)

vue.use(i18n)
vue.use(pinia)
vue.use(router)

vue.mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
