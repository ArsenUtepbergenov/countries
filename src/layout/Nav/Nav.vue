<script setup>
import SearchInput from '@/components/Inputs/SearchInput.vue'
import Dropdown from '@/components/Dropdown/Dropdown.vue'
</script>

<template>
  <nav class="container nav">
    <div class="row nav-content">
      <SearchInput />
      <Dropdown />
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
