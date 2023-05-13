<script setup lang="ts">
import SearchInput from '@/components/Inputs/SearchInput.vue'
import RegionFilter from '@/components/Filters/RegionFilter.vue'

const searchInputValue = ref('')
</script>

<template>
  <nav class="nav">
    <div class="container">
      <div class="flex flex-column md:flex-row justify-content-between">
        <div class="w-full md:w-5 mb-5">
          <SearchInput v-model="searchInputValue" />
        </div>
        <div class="mb-5">
          <RegionFilter />
        </div>
      </div>
    </div>
  </nav>
</template>
