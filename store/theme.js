import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTheme = defineStore('theme', () => {
  const dark = ref(false)

  function toggle() {
    dark.value = !dark.value
  }

  return { dark, toggle }
})
