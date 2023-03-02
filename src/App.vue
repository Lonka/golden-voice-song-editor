<script setup lang="ts">
import { pageNames } from './types/global'

const router = useRouter()
const { currentPageIndex } = toRefs(usePageStore())
watch(currentPageIndex, (newVal, oldVal) => {
  switch (newVal) {
    case pageNames.Home:
      router.push('/Home')
  }
})
</script>

<template>
  <div class="lk-application text-white tracking-2px">
    <div class="lk-application_wrap">
      <RouterView />
    </div>
  </div>
</template>

<style>
</style>
