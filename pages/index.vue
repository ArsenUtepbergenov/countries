<script setup>
import Nav from '@/layout/Nav/Nav.vue'
import Main from '@/layout/Main/Main.vue'
import Header from '@/layout/Header/Header.vue'
import { useTheme } from '@/store/theme.js'
import { ref, watch } from 'vue'

const theme = useTheme()

const page = ref(null)

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
  <Head>
    <Title>Countries</Title>
  </Head>
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

  height: 100vh;
}

.dark {
  --text-color: var(--white);
  --bg-color: var(--dm-very-dark-blue);
  --theme-color: var(--dark-blue);
  --input: var(--dark-blue);
}
</style>
