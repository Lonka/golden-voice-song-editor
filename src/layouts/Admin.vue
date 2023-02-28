<template>
  <RouterView v-slot="{ Component }">
    <div>
      <component :is="Component" />
    </div>
  </RouterView>
  <div>[is Layout]</div>
</template>
