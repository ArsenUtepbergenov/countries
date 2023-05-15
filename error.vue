<template>
  <h1>Page not found</h1>
  <Button @click="handleError">Go back</Button>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })
</script>
