<script setup lang="ts">
import Nav from '@/layout/Nav/Nav.vue'
import Main from '@/layout/Main/Main.vue'
import Header from '@/layout/Header/Header.vue'
import { ref, watch } from 'vue'
import { useTheme } from '~/store/theme'

const theme = useTheme()

const page = ref<HTMLElement | null>(null)

watch(
  theme,
  () => {
    page.value?.classList.toggle('dark')
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div ref="page" class="page">
    <Header />
    <Nav />
    <Main />
  </div>
</template>

<style lang="scss">
.page {
  color: var(--text-color);
  background: var(--bg-color);
  min-height: 100vh;
}

.dark {
  --text-color: var(--white);
  --bg-color: var(--dm-very-dark-blue);
  --theme-color: var(--dark-blue);
  --input: var(--dark-blue);
  --bs: var(--bs-dark);
}
</style>
