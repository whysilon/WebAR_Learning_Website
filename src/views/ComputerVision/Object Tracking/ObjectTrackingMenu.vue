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
    label: 'Important Terms',
    route: '#Important-Terms',
  },
  {
    label: 'Object Recognition',
    route: '#Object-Recognition',
  },
  {
    label: 'Steps of Object Tracking',
    route: '#Steps-of-Object-Tracking',
  },
]
</script>
