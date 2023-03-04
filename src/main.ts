import { createApp } from 'vue'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import { pageNames } from './types/global'
import generatedRoutes from '~pages'
import pinia from '~/modules/pinia'
import i18n from '~/modules/i18n'

import '@unocss/reset/tailwind.css'
import '~/style.css'
import 'uno.css'

import App from '~/App.vue'
import '~/samples/node-api'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  // refer to: https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/commonIssues.html
  history: import.meta.env.PROD ? createWebHashHistory() : createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const changePage = (path: string) => {
  const pageStore = usePageStore()
  switch (path) {
    case '/':
      pageStore.changePageTo(pageNames.Index)
      break
    case '/Home':
      pageStore.changePageTo(pageNames.Home)
      break
  }
}

router.beforeEach((to, from) => {
  if (to.path !== from.path) {
    changePage(to.path)
    NProgress.start()
  }
})

router.afterEach(() => {
  NProgress.done()
})

const vue = createApp(App)

vue.use(i18n)
vue.use(pinia)
vue.use(router)

vue.mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
