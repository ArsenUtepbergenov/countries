<script setup lang="ts">
import Header from '@/layout/Header/Header.vue'
import { ref, watch } from 'vue'
import { useTheme } from './composable/useTheme'

const theme = useTheme()

const page = ref<HTMLElement | null>(null)

watch(
  theme.dark,
  () => {
    page.value?.classList.toggle('dark')
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <NuxtLayout>
    <Head>
      <Title>Countries</Title>
    </Head>
    <div ref="page" class="page">
      <Header />
      <NuxtPage />
    </div>
  </NuxtLayout>
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
