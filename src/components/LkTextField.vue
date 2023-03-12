<script setup lang="ts">
import { density } from '~/types/global'
const props = defineProps<{
  placeholder?: string
  density?: density // global.density
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  prependIcon?: string
  prependInnerIcon?: string
  appendIcon?: string
  appendInnerIcon?: string
}>()

// ['click:prepend', 'click:append', 'click:prependInner', 'click:appendInner']
const emit = defineEmits<{
  (event: 'click:prepend'): void
  (event: 'click:append'): void
  (event: 'click:prependInner'): void
  (event: 'click:appendInner'): void
}>()
const { modelValue } = defineModel<{
  modelValue: string
}>()
const clear = () => {
  modelValue.value = ''
}
</script>

<template>
  <lk-input
    :density="density" :prepend-icon="prependIcon" :append-icon="appendIcon" :disabled="disabled" :readonly="readonly"
    @click:prepend="emit('click:append', $event)"
    @click:append="emit('click:append', $event)"
  >
    <template #input>
      <lk-field
        :density="density" :prepend-icon="prependInnerIcon" :append-icon="appendInnerIcon" :clearable="clearable" :disabled="disabled" :readonly="readonly"
        @click:clear="clear"
        @click:prepend-inner="emit('click:prependInner', $event)"
        @click:append-inner="emit('click:appendInner', $event)"
      >
        <template #field>
          <input v-model="modelValue" class="w-full" type="text" :placeholder="placeholder" :readonly="readonly">
        </template>
      </lk-field>
    </template>
  </lk-input>
</template>
