<script setup>
defineProps({
  label: {
    type: String,
    default() {
      return ''
    },
  },
})

const emit = defineEmits(['change'])

function handleClick() {
  emit('change')
}
</script>

<template>
  <div class="switcher" @click="handleClick">
    <slot />
    <label class="switcher-label">{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>
.switcher {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  cursor: pointer;

  &-label {
    cursor: pointer;
  }
}
</style>
