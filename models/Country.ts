import { array, z } from 'zod'

const RegionSchema = z.enum(['Africa', 'America', 'Asia', 'Europe', 'Oceania'])

const FilterRegionItemSchema = z.object({ region: RegionSchema, code: z.string() })
const FilterRegionItemsSchema = z.array(FilterRegionItemSchema)

const CountrySchema = z.object({
  name: z.object({ common: z.string() }),
  population: z.number(),
  region: z.string(),
  capital: z.array(z.string()),
  flags: z.object({ alt: z.string(), png: z.string().url(), svg: z.string().url() }),
})

export const CountryDetailsSchema = CountrySchema.merge(
  z.object({
    name: z.object({
      common: z.string(),
      nativeName: z.record(z.string(), z.object({ common: z.string() })),
    }),
    tld: z.array(z.string()),
    subregion: z.string(),
    currencies: z.record(z.string(), z.object({ name: z.string() })),
    languages: z.record(z.string(), z.string()),
    borders: z.array(z.string()),
  }),
)

export const CountriesSchema = z.array(CountrySchema)

export type FilterRegionItem = z.infer<typeof FilterRegionItemSchema>
export type FilterRegionItems = z.infer<typeof FilterRegionItemsSchema>
export type Region = z.infer<typeof RegionSchema>
export type Country = z.infer<typeof CountrySchema>
export type Countries = z.infer<typeof CountriesSchema>
export type CountryDetails = z.infer<typeof CountryDetailsSchema>

export const url = 'https://restcountries.com/v3.1/all'
export const urlByRegion = 'https://restcountries.com/v3.1/region/'
export const urlByName = 'https://restcountries.com/v3.1/name/'
export const defaultFields = 'name,population,capital,region,flags'
export const detailsFields = `${defaultFields},tld,subregion,currencies,languages,borders`
export const ERROR = 'Error during parsing countries (check query params)'
