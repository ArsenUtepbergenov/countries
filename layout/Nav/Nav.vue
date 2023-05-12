<script setup>
import SearchInput from '@/components/Inputs/SearchInput.vue'
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import { ref } from 'vue'

const searchInputValue = ref('')
</script>

<template>
  <nav class="nav">
    <div class="container nav-content">
      <div class="row">
        <SearchInput v-model="searchInputValue" />
        <Dropdown />
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
