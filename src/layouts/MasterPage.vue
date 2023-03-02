<template>
  <!-- <main-menu /> -->
  <RouterView v-slot="{ Component }">
    <div class="pt-24px">
      <component :is="Component" />
    </div>
  </RouterView>
  <div rel="preload" class="lk-bg-img" />
</template>
