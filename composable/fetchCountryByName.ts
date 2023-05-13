import {
  CountryDetails,
  CountryDetailsSchema,
  ERROR,
  detailsFields,
  urlByName,
} from '~/models/Country'

export async function fetchCountryByName(name: string): Promise<{} | CountryDetails> {
  try {
    const { data } = await useFetch<CountryDetails[]>(`${urlByName}${name}`, {
      query: { fields: detailsFields },
    })

    if (!data.value?.length) return {}
    else {
      const result = CountryDetailsSchema.safeParse(data.value[0])

      if (result.success) return result.data
      else throw new Error(ERROR)
    }
  } catch (error) {
    console.error(error)
    return {}
  }
}
