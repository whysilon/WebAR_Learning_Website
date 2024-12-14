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
    label: 'Types of AR',
    route: '#Types of AR',
  },
])
</script>
