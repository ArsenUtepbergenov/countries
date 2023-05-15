<script setup lang="ts">
import { fetchCountryByName } from '~/composable/fetchCountryByName'
import { CountryDetails } from '~/models/Country'
import TextList from '~/components/List/TextList.vue'

const route = useRoute()

console.log(route.params)

const result = (await fetchCountryByName(route.params.id as string)) as CountryDetails
</script>

<template>
  <section class="px-4 md:px-3">
    <div class="mt-6 mb-8">
      <NuxtLink to="/">
        <span class="bs link">
          <i class="pi pi-arrow-left" />
          &nbsp;&nbsp;Back
        </span>
      </NuxtLink>
    </div>

    <div class="flex pb-8 flex-column lg:flex-row">
      <div class="mb-4">
        <img :src="result.flags.svg" :alt="result.flags.alt" />
      </div>
      <div>
        <h1>{{ result.name.common }}</h1>
        <br />
        <div class="flex flex-column lg:flex-row info">
          <p>
            <strong>Native name: </strong
            >{{ Object.values(result.name.nativeName)[0].common }}
          </p>
          <p><strong>Population: </strong>{{ result.population }}</p>
          <p><strong>Region: </strong>{{ result.region }}</p>
          <p><strong>Sub Region: </strong>{{ result.subregion }}</p>
          <p><strong>Capital: </strong>{{ result.capital[0] }}</p>
          <br />
          <p>
            <strong>Top Level Domain: </strong>
            <TextList :list="result.tld" />
          </p>
          <p>
            <strong>Currencies: </strong>
            <TextList :list="Object.values(result.currencies).map(i => i.name)" />
          </p>
          <p>
            <strong>Languages: </strong>
            <TextList :list="Object.values(result.languages)" />
          </p>
        </div>
        <br />
        <div class="flex flex-column lg:flex-row lg:align-items-center gap-3">
          <span>Border Countries: </span>
          <div class="flex flex-wrap gap-2">
            <NuxtLink v-for="b in result.borders" :key="b" to="/">
              <Tag :value="b" class="bs link" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.link {
  border-radius: 0;
  background-color: var(--theme-color);
  border: 0;
  color: var(--text-color);
  padding: 10px 36px;
}
</style>
