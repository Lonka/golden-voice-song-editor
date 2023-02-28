<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const pageStore = usePageStore()
const router = useRouter()
pageStore.setNewPageName('page name')

const { availableLocales, locale, t } = useI18n()
console.log(availableLocales)
// availableLocales = ['en-US', 'zh-TW']
locale.value = availableLocales[0]

router.push('/test')
console.log('[App.vue]', `Hello world from Electron ${process.versions.electron}!`)
const modelValue = ref('test')
const count = ref(0)
</script>

<template>
  <div>
    <div class="font-bold">
      {{ t('labels.home') }}
    </div>
    <div>{{ pageStore.currentPageName }}</div>
  </div>
  <HelloWorld v-model:model-value="modelValue" v-model:count="count" msg="Electron + Vite + Vue" />
  <div>{{ count }}</div>
  <div>{{ modelValue }}</div>
  <div class="flex-center">
    Place static files into the <code>/public</code> folder
    <img style="width:5em;" src="/node.svg" alt="Node logo">
  </div>
  <div @click="router.push('/test')">
    test
  </div>
  <div @click="router.push('/testB')">
    testB
  </div>
  <RouterView />
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
