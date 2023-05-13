import {
  fetchAllCountries,
  fetchCountriesByRegion,
} from '~/composable/fetchAllCountries'
import { Countries, FilterRegionItem, Region } from '~/models/Country'

export const useCountriesStore = defineStore('countries', () => {
  const all = ref<Countries>([])
  const filteredCountries = ref<Countries>([])
  const selectedRegion = ref<FilterRegionItem | null>(null)
  const searchInputValue = ref('')

  async function fetchAll() {
    all.value = (await fetchAllCountries()) as Countries
  }

  async function fetchByRegion(region: Region) {
    filteredCountries.value = (await fetchCountriesByRegion(region)) as Countries
  }

  const current = computed(() => {
    if (selectedRegion.value === null) return all.value
    return filteredCountries.value
  })

  return { current, selectedRegion, searchInputValue, fetchAll, fetchByRegion }
})
