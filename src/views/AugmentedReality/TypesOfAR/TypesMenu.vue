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
    label: 'Head-Worn Display',
    route: '#Head-Worn-Display',
  },
  {
    label: 'See-Through Display',
    route: '#See-Through-Display',
  },
  {
    label: 'Projection Display',
    route: '#Projection-Display',
  },
]
</script>
