import { Countries, CountriesSchema, ERROR, defaultFields, url } from '~/models/Country'

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
