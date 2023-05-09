import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTheme = defineStore('theme', () => {
  const value = ref('dark')

  return { value }
})
