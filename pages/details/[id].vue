<script setup lang="ts">
import { fetchCountryByName } from '~/composable/fetchCountryByName'
import { CountryDetails } from '~/models/Country'

const route = useRoute()

console.log(route.params)

const result = (await fetchCountryByName(route.params.id as string)) as CountryDetails
</script>

<template>
  {{ result.name.common }}
  Details {{ route.params.id }}
</template>

borders : ["FRA", "DEU", "LUX", "NLD"] capital : ["Brussels"] currencies : {EUR: {name:
"Euro", symbol: "€"}} flags : {png: "https://flagcdn.com/w320/be.png", svg:
"https://flagcdn.com/be.svg",…} languages : {deu: "German", fra: "French", nld: "Dutch"}
name : {common: "Belgium", official: "Kingdom of Belgium",…} population : 11555997
region : "Europe" subregion : "Western Europe" tld : [".be"]
