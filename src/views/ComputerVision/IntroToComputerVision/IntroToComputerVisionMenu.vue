<template>
  <SideMenu :items="items"/>
</template>

<script setup>
import SideMenu from '@/components/SideMenu.vue';

const items = [
  {
    label: 'Introduction',
    route: '#Introduction',
  },
  {
    label: 'How does a computer see?',
    route: '#How-Computer-Vision',
  },
  {
    label: 'Difficulties in AR',
    route: '#Difficulties-in-AR',
  },
]
</script>
