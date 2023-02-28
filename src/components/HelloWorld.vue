<script setup lang="ts">
import NProgress from 'nprogress'

defineProps<{ msg: string }>()
defineOptions({
  name: 'hello-world',
})
const { modelValue, count } = defineModel<{
  modelValue: string
  count: number
}>()

const increase = () => {
  NProgress.start()
  useTimeoutFn(() => {
    count.value++
    modelValue.value = 'lonka'
    NProgress.done()
  }, 200)
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <div>{{ modelValue }}</div>
  <div class="card">
    <button type="button" @click="increase">
      count is {{ count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">
    Click on the Vite and Vue logos to learn more
  </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
