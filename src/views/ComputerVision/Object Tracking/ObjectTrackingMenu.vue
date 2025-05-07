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
    label: 'Important Terms',
    route: '#Important-Terms',
  },
]
</script>
