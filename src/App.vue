<script setup>
import Nav from './layout/Nav/Nav.vue'
import Main from './layout/Main/Main.vue'
import Header from './layout/Header/Header.vue'
import { useTheme } from './store/theme'
import { ref, onMounted } from 'vue'

const theme = useTheme()

const page = ref(null)

onMounted(() => {
  page.value.classList.add(theme.value)
})
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

  height: 100vh;
}

.dark {
  --text-color: var(--white);
  --bg-color: var(--dm-very-dark-blue);
  --theme-color: var(--dark-blue);
  --input: var(--dark-blue);
}

.light {
  --text-color: var(--lm-very-dark-blue);
  --bg-color: var(--very-light-grey);
  --theme-color: var(--white);
  --input: var(--dark-grey);
}
</style>
