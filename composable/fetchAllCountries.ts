import { Countries, CountriesSchema, Region } from '~/models/Country'

const url = 'https://restcountries.com/v3.1/all'
const urlByRegion = 'https://restcountries.com/v3.1/region/'
const defaultFields = 'name,population,capital,region,flags'
const ERROR = 'Error during parsing countries (check query params)'

export async function fetchAllCountries() {
  try {
    const { data } = await useFetch<Countries>(url, {
      query: { fields: defaultFields },
    })

    const result = CountriesSchema.safeParse(data.value)

    if (result.success) return result.data
    else throw new Error(ERROR)
  } catch (error) {
    console.error(error)
  }
}

export async function fetchCountriesByRegion(region: Region) {
  try {
    const { data } = await useFetch<Countries>(`${urlByRegion}${region}`, {
      query: { fields: defaultFields },
    })

    const result = CountriesSchema.safeParse(data.value)

    if (result.success) return result.data
    else throw new Error(ERROR)
  } catch (error) {
    console.error(error)
  }
}
