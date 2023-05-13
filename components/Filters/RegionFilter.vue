<script setup lang="ts">
const selectedRegion = ref()
const regions = ref([
  { region: 'Africa', code: 'Africa' },
  { region: 'America', code: 'America' },
  { region: 'Asia', code: 'Asia' },
  { region: 'Europe', code: 'Europe' },
  { region: 'Oceania', code: 'Oceania' },
])
</script>

<template>
  <Dropdown
    v-model="selectedRegion"
    :options="regions"
    optionLabel="region"
    placeholder="Filter by Region"
    class="border-none bs input"
    style="padding: 6px"
  />
</template>
