<script setup>
const props = defineProps(['modelValue', 'modelModifiers'])
const emit = defineEmits(['update:modelValue'])

function handleInput(e) {
  if (!props.modelModifiers?.lazy) emit('update:modelValue', e.target.value)
}

function handleChange(e) {
  if (props.modelModifiers?.lazy) emit('update:modelValue', e.target.value)
}
</script>

<template>
  <span class="w-full p-input-icon-left">
    <i class="pi pi-search" />
    <InputText
      :value="modelValue"
      @change="handleChange"
      @input="handleInput"
      placeholder="Search for a country..."
      class="w-full border-none bs input"
      style="padding-top: 18px; padding-bottom: 18px"
    />
  </span>
</template>
