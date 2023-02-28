<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const pageStore = usePageStore()
pageStore.setNewPageName('page name')

const { availableLocales, locale, t } = useI18n()
console.log(availableLocales)
// availableLocales = ['en-US', 'zh-TW']
locale.value = availableLocales[0]

console.log('[App.vue]', `Hello world from Electron ${process.versions.electron}!`)
</script>

<template>
  <div>
    <div>{{ t('labels.home') }}</div>
    <div>{{ pageStore.currentPageName }}</div>
  </div>
  <HelloWorld msg="Electron + Vite + Vue" />
  <div class="flex-center">
    Place static files into the <code>/public</code> folder
    <img style="width:5em;" src="/node.svg" alt="Node logo">
  </div>
</template>

<style>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo.electron:hover {
  filter: drop-shadow(0 0 2em #9FEAF9);
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
