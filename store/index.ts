import { fetchAllCountries } from '~/composable/fetchAllCountries'
import { fetchCountriesByRegion } from '~/composable/fetchCountriesByRegion'
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

  const filteredByRegion = computed(() => {
    if (selectedRegion.value === null) return all.value
    return filteredCountries.value
  })

  const current = computed(() => {
    if (searchInputValue.value !== '') {
      return filteredByRegion.value.filter(j =>
        j.name.common.toLowerCase().includes(searchInputValue.value.toLowerCase()),
      )
    } else return filteredByRegion.value
  })

  return { current, selectedRegion, searchInputValue, fetchAll, fetchByRegion }
})
