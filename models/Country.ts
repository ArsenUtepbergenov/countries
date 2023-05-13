import { z } from 'zod'

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

export const CountriesSchema = z.array(CountrySchema)

export type FilterRegionItem = z.infer<typeof FilterRegionItemSchema>
export type FilterRegionItems = z.infer<typeof FilterRegionItemsSchema>
export type Region = z.infer<typeof RegionSchema>
export type Country = z.infer<typeof CountrySchema>
export type Countries = z.infer<typeof CountriesSchema>
