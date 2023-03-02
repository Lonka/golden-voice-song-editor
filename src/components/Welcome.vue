<script setup lang="ts">
import welcomeImg from '~/assets/welcome.png'
import { pageNames } from '~/types/global'

const pageStore = usePageStore()
const show = ref(false)
onMounted(() => {
  // show logo
  useTimeoutFn(() => {
    show.value = true
    // hide logo
    useTimeoutFn(() => {
      show.value = false
      // change page
      useTimeoutFn(() => {
        pageStore.changePageTo(pageNames.Home)
      }, 1000 / 3)
    }, 1000)
  }, 1000 / 2)
})
</script>

<template>
  <div class="mx-auto h-full flex items-center justify-center">
    <Transition name="slide-fade">
      <img v-if="show" rel="preload" class="welcome-img" :src="welcomeImg">
    </Transition>
  </div>
</template>

<style>
.welcome-img{
    @apply w-9/10 bg-no-repeat bg-cover bg-center;
}
</style>
