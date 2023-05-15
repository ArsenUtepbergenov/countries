<script setup lang="ts">
import SearchInput from '@/components/Inputs/SearchInput.vue'
import RegionFilter from '@/components/Filters/RegionFilter.vue'
import { useCountriesStore } from '~/store'
import { FilterRegionItem } from '~/models/Country'

const store = useCountriesStore()

watch(
  () => store.selectedRegion,
  (value: FilterRegionItem | null) => {
    if (value === null) return

    store.fetchByRegion(value.region)
  },
)
</script>

<template>
  <nav class="px-4 md:px-3">
    <div class="flex flex-column md:flex-row justify-content-between">
      <div class="w-full md:w-5 mb-5">
        <SearchInput v-model="store.searchInputValue" />
      </div>
      <div class="mb-5">
        <RegionFilter v-model="store.selectedRegion" />
      </div>
    </div>
  </nav>
</template>
