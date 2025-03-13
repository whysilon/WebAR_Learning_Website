<template>
  <SideMenu :items="items"/>
</template>

<script setup>
import SideMenu from '@/components/SideMenu.vue';

const items = [
  {
    label: 'Introduction to AR',
    route: '#Introduction-to-AR',
  },
  {
    label: 'Definition of AR',
    route: '#Definition-of-AR',
  },
  {
    label: 'History of AR',
    route: '#History-of-AR',
  },
]
</script>
