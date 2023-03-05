<script setup lang="ts">
import { density } from '~/types/global'
const useDao = useDataObjectAccess()
const menus = useDao.getMenus()
</script>

<template>
  <main-menu :menus="menus" :density="density.Compact" hidden-logo />
  <RouterView v-slot="{ Component }">
    <div class="lk-container">
      <component :is="Component" />
    </div>
  </RouterView>
  <div rel="preload" class="lk-bg-img" />
</template>
