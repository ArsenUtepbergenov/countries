<script setup lang="ts">
import Switcher from '@/components/Inputs/Switcher.vue'
import { useTheme } from '~/composable/useTheme'

const theme = useTheme()
</script>

<template>
  <header class="header mb-4 bs">
    <div class="px-4 md:px-3 lg:px-6 header-content">
      <h1 class="title">Where in the world?</h1>
      <Switcher label="Dark mode" @change="theme.toggle">
        <ion-icon :name="theme.dark.value ? 'moon' : 'moon-outline'" />
      </Switcher>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 126px;
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
