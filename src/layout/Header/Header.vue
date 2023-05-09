<script setup>
import Switcher from '@/components/Inputs/Switcher.vue'
</script>

<template>
  <header class="header">
    <div class="container header-content">
      <h1 class="title">Where in the world?</h1>
      <Switcher />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 160px;
  background: var(--theme-color);

  .title {
    font-size: 1rem;
  }

  &-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
