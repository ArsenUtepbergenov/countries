import {
  Region,
  Countries,
  urlByRegion,
  defaultFields,
  CountriesSchema,
  ERROR,
} from '~/models/Country'

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
