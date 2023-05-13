<script setup lang="ts">
import { DropdownChangeEvent } from 'primevue/dropdown'
import { FilterRegionItems } from '~/models/Country'

const regions = ref<FilterRegionItems>([
  { region: 'Africa', code: 'Africa' },
  { region: 'America', code: 'America' },
  { region: 'Asia', code: 'Asia' },
  { region: 'Europe', code: 'Europe' },
  { region: 'Oceania', code: 'Oceania' },
])

defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

function handleChange(e: DropdownChangeEvent) {
  emit('update:modelValue', e.value)
}
</script>

<template>
  <Dropdown
    :modelValue="modelValue"
    @change="handleChange"
    :options="regions"
    :showClear="modelValue !== null ? true : false"
    optionLabel="region"
    placeholder="Filter by Region"
    class="border-none bs input"
    style="padding: 6px"
  />
</template>
