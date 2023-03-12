<script setup lang="ts">
import { density } from '~/types/global'

const props = defineProps<{
  density?: density // global.density
  disabled?: boolean
  readonly?: boolean
  appendIcon?: string
  prependIcon?: string
}>()
const emit = defineEmits(['click:prepend', 'click:append'])
defineOptions({
  name: 'lk-input',
})
const input = ref<HTMLDivElement>()
onMounted(() => {
  if (props.density) {
    switch (props.density) {
      case density.Default:
      case density.Comfortable:
        input.value?.style.setProperty('--lk-input-font-size', '1.2rem')
        input.value?.style.setProperty('--lk-input-height', '56px')
        break
      case density.Compact:
        input.value?.style.setProperty('--lk-input-font-size', '1rem')
        input.value?.style.setProperty('--lk-input-height', '40px')
        break
    }
  }
})
</script>

<template>
  <div
    ref="input" class="lk-input" :class="{
      'lk-input--disabled': props.disabled,
      'lk-input--readonly': props.readonly,
    }"
  >
    <div v-if="props.prependIcon" class="lk-input-prepend" @click="emit('click:prepend', $event)">
      <i class="lk-icon" :class="[props.prependIcon]" />
    </div>
    <div class="lk-input-control">
      <slot name="input" />
    </div>
    <div v-if="props.appendIcon" class="lk-input-append" @click="emit('click:append', $event)">
      <i class="lk-icon" :class="[props.appendIcon]" />
    </div>
  </div>
</template>

<style scoped>
.lk-input {
  --lk-input-font-size: 1rem;
  --lk-input-font-width: 400px;
  --lk-input-height: 40px;
  --lk-input-padding-top: 10px;
  --lk-input-affix-margin-inside: 16px;

  @apply grid flex-auto leading-6;
  font-size: var(--lk-input-font-size);
  font-weight: var(--lk-input-font-width);
  grid-template-areas: "prepend control append";
  grid-template-columns: max-content minmax(0, 1fr) max-content;
  grid-template-rows: auto auto;
}

.lk-input--disabled {
  @apply pointer-events-none;
  opacity: var(--lk-disabled-opacity);
}

.lk-input .lk-input-prepend{
  @apply cursor-pointer;
  padding-top: var(--lk-input-padding-top);
  grid-area: prepend;
  margin-inline-end: var(--lk-input-affix-margin-inside);
}

.lk-input .lk-input-control{
  @apply flex w-full outline-none border-none rounded-md;
  height:var(--lk-input-height);
  grid-area: control;
}

.lk-input .lk-input-append{
  @apply cursor-pointer;
  padding-top: var(--lk-input-padding-top);
  grid-area: append;
  margin-inline-start: var(--lk-input-affix-margin-inside);
}
</style>
