<template>
  <div>
    <Menu :model="items">
      <template #item="{ item, props }">
        <router-link v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="item.route">
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
      </template>
    </Menu>
  </div>
</template>

<script setup>
import { Menu } from 'primevue'
import { ref } from 'vue'

const items = ref([
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
])
</script>
