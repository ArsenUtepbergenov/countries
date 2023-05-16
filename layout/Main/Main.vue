<script setup lang="ts">
import Countries from '~/components/Grid/Countries.vue'
import { useCountriesStore } from '~/store'

const store = useCountriesStore()

await store.fetchAll()
</script>

<template>
  <main class="px-4 md:px-3 lg:px-6">
    <Suspense :timeout="0">
      <template #default>
        <Countries />
      </template>
      <template #fallback>
        <div class="flex justify-content-center align-item-center">
          <ProgressSpinner strokeWidth="6" aria-label="Loading" />
        </div>
      </template>
    </Suspense>
  </main>
</template>
