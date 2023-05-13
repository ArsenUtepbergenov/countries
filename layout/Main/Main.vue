<script setup lang="ts">
import { useCountriesStore } from '~/store'
import CountryCard from '~/components/Cards/CountryCard.vue'

const store = useCountriesStore()

await store.fetchAll()
</script>

<template>
  <div class="container">
    <div class="grid">
      <div
        class="flex justify-content-center lg:justify-content-between col-12 md:col-6 lg:col-4 xl:col-3 mb-4"
        v-for="country in store.all"
        :key="country.name.common"
      >
        <CountryCard :data="country" />
      </div>
    </div>
  </div>
</template>
