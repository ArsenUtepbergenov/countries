<script setup lang="ts">
import Countries from '~/components/Grid/Countries.vue'
</script>

<template>
  <div class="container">
    <Suspense :timeout="0">
      <template #default>
        <Countries />
      </template>
      <template #fallback>
        <ProgressSpinner strokeWidth="6" aria-label="Loading" />
      </template>
    </Suspense>
  </div>
</template>
