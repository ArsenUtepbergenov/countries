<script setup lang="ts">
import { Country } from '~/models/Country'
import useConvertor from '~/composable/useConvertor'

const convertor = useConvertor()

const props = defineProps<{
  data: Country
}>()
const { data } = toRefs(props)
</script>

<template>
  <NuxtLink :to="`/${data.name.common}`">
    <Card :style="{ width: '320px', height: '440px' }">
      <template #header>
        <img :src="data.flags.svg" :alt="data.flags.alt" width="320" height="210" />
      </template>
      <template #title>
        <span class="font-bold">{{ data.name.common }}</span>
      </template>
      <template #content>
        <div class="flex flex-column text-xl line-height-3">
          <p>
            <span class="font-semibold">Population: </span
            >{{ convertor.parse(data.population) }}
          </p>
          <p><span class="font-semibold">Region: </span>{{ data.region }}</p>
          <p><span class="font-semibold">Capital: </span>{{ data.capital[0] }}</p>
        </div>
      </template>
    </Card>
  </NuxtLink>
</template>
