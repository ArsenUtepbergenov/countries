import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useCountriesStore = defineStore('countries', () => {
  const all = reactive({})

  return { all }
})
