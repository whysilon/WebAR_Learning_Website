<template>
  <SideMenu :items="items" />
</template>

<script setup>
import SideMenu from '@/components/SideMenu.vue'

const items = [
  {
    label: 'Introduction',
    route: '#Introduction',
  },
  {
    label: 'Why Feature Detection?',
    route: '#Why-Feature-Detection',
  },
  {
    label: 'Feature Detection',
    route: '#Feature-Detection',
  },
]
</script>
