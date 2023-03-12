<script setup lang="ts">
import { density } from '~/types/global'
const txt = ref('')
function append(event) {
  txt.value = 'append'
}
</script>

<template>
  <lk-text-field
    v-model="txt"
    :density="density.Compact"
    placeholder="Search"
    clearable
    prepend-inner-icon="i-carbon-search"
    append-icon="i-carbon-edit"
    @click:append="append"
  />
  <div>
    {{ txt }}
  </div>
</template>

<route lang="yaml">
meta:
  layout: MasterPage
</route>
