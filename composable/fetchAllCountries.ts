import { Countries, CountriesSchema } from '~/models/Country'

const url = 'https://restcountries.com/v3.1/all'
const defaultFields = 'name,population,capital,region,flags'

export async function fetchAllCountries() {
  try {
    const { data } = await useFetch<Countries>(url, {
      query: { fields: defaultFields },
    })

    const result = CountriesSchema.safeParse(data.value)

    if (result.success) return result.data
    else throw new Error('Error during parsing countries (check query params)')
  } catch (error) {
    console.error(error)
  }
}
