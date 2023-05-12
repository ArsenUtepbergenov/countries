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
  <div class="search">
    <input
      class="search-input"
      :value="modelValue"
      @change="handleChange"
      @input="handleInput"
    />
  </div>
</template>

<style lang="scss" scoped>
.search {
  &-input {
    padding: 1rem 0.5rem;
  }
}
</style>
