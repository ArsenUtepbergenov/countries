<script setup lang="ts">
interface TextListProps {
  list: string[]
  d?: string
}

const props = withDefaults(defineProps<TextListProps>(), {
  list: () => [],
  d: '',
})
</script>

<template>
  <span v-for="(item, _i) in list" :key="item">
    {{ item }}<span v-if="_i !== list.length - 1">{{ d }}&nbsp;</span>
  </span>
</template>
