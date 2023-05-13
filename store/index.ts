import { fetchAllCountries } from '~/composable/fetchAllCountries'
import { Countries } from '~/models/Country'

export const useCountriesStore = defineStore('countries', () => {
  const countries = ref<Countries>([])

  async function fetchAll() {
    countries.value = (await fetchAllCountries()) as Countries
  }

  const all = computed<Countries>(() => countries.value)

  return { all, fetchAll }
})
