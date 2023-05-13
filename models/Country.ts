import { z } from 'zod'

const CountrySchema = z.object({
  name: z.object({ common: z.string() }),
  population: z.number(),
  region: z.string(),
  capital: z.array(z.string()),
  flags: z.object({ alt: z.string(), png: z.string().url(), svg: z.string().url() }),
})

export const CountriesSchema = z.array(CountrySchema)

export type Country = z.infer<typeof CountrySchema>
export type Countries = z.infer<typeof CountriesSchema>
