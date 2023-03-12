<script setup lang="ts">
import { density } from '~/types/global'

const props = defineProps<{
  density?: density // global.density
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  appendIcon?: string
  prependIcon?: string
}>()
const emit = defineEmits(['click:prependInner', 'click:appendInner', 'click:clear'])
defineOptions({
  name: 'lk-field',
})

const field = ref<HTMLDivElement>()
const { focused } = useFocusWithin(field)
onMounted(() => {
  if (props.density) {
    switch (props.density) {
      case density.Default:
      case density.Comfortable:
        field.value?.style.setProperty('--lk-input-font-size', '1.2rem')
        field.value?.style.setProperty('--lk-input-height', '56px')
        break
      case density.Compact:
        field.value?.style.setProperty('--lk-input-font-size', '1rem')
        field.value?.style.setProperty('--lk-input-height', '40px')
        break
    }
  }
})
watch(focused, (newVal, oldVal) => {
  if (newVal)
    field.value?.classList.add('lk-field--focused')
  else
    field.value?.classList.remove('lk-field--focused')
})
</script>

<template>
  <div
    ref="field" class="lk-field" :class="{
      'lk-field--disabled': props.disabled,
      'lk-field--readonly': props.readonly,
      'lk-field--clearable': props.clearable,
    }"
  >
    <!-- <div class="lk-field-overlay" /> -->
    <div v-if="props.prependIcon" class="lk-field-prepend-inner" @click="emit('click:prependInner', $event)">
      <i class="lk-icon" :class="[props.prependIcon]" />
    </div>
    <div class="lk-field-control">
      <slot name="field" />
      <!-- <input class=" w-full text-black" type="text" placeholder="Search here"> -->
    </div>
    <div v-if="props.clearable" class="lk-field-clearable" @click="emit('click:clear', $event)">
      <i class="lk-icon i-carbon-close-filled" />
    </div>
    <div v-if="props.appendIcon" class="lk-field-append-inner" @click="emit('click:appendInner', $event)">
      <i class="lk-icon" :class="[props.appendIcon]" />
    </div>
  </div>
</template>

<style scoped>
.lk-field{
    --lk-field-font-size: 1rem;
    --lk-field-font-width: 400px;
    --lk-field-height: 40px;
    --lk-field-padding-top: 10px;
    --lk-field-affix-margin-inside: 16px;
    --lk-field-max-width: 100%;
    --lk-field-padding-after: 5px;
    --lk-field-control-affixed-padding: 12px;
    @apply grid w-full relative;
    grid-template-areas: "prepend-inner field clear append-inner";
    grid-template-columns: min-content minmax(0, 1fr) min-content min-content;
    font-size: var(--lk-field-font-size);
    font-weight: var(--lk-field-font-width);
    border-radius: var(--lk-border-radius);
    max-width: var(--lk-field-max-width);
    background-color: white;
    /* contain:layout;
    grid-area: control;
    flex: 1 0; */
}
/* .lk-field .lk-field-overlay{
    background-color: currentColor;
    border-radius: inherit;
    opacity: 1;
    pointer-events: none;
    transition: opacity 300;
} */
.lk-field--disabled {
    @apply pointer-events-none;
    opacity: var(--lk-disabled-opacity);
}

.lk-field .lk-field-prepend-inner{
    padding-top: var(--lk-field-padding-top);
    grid-area: prepend-inner;
    /* padding-inline-end: var(--lk-field-padding-after); */
    padding-inline-start: var(--lk-field-control-affixed-padding);
    color:rgb(var(--lk-theme-dark));
}
.lk-field .lk-field-control{
    @apply flex w-full outline-none border-none;
    height:var(--lk-field-height);
    grid-area: field;
    padding-left: var(--lk-field-control-affixed-padding);
    padding-right: var(--lk-field-control-affixed-padding);
    color:rgb(var(--lk-theme-dark));
}

.lk-field .lk-field-clearable{
    @apply cursor-pointer opacity-0 transition-opacity duration-300;
    padding-top: var(--lk-field-padding-top);
    grid-area: clear;
    padding-inline-end: var(--lk-field-control-affixed-padding);
    color:rgb(var(--lk-theme-dark));
}

.lk-field:hover .lk-field-clearable,
.lk-field--focused .lk-field-clearable{
    @apply opacity-100;
}

.lk-field .lk-field-append-inner{
    padding-top: var(--lk-field-padding-top);
    grid-area: append-inner;
    /* padding-inline-start: var(--lk-field-padding-after); */
    padding-inline-end: var(--lk-field-control-affixed-padding);
    color:rgb(var(--lk-theme-dark));
}
</style>
