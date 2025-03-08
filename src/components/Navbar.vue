<script setup>
import { Menubar } from 'primevue'
import { ref } from 'vue'

const cvMenu = ref([
  { label: 'Introduction to Computer Vision', route: '/docs/CV/intro-to-computer-vision' },
  { label: 'Object Tracking', route: '/docs/CV/object-tracking' },
])

const arMenu = ref([
  { label: 'Introduction to AR', route: '/docs/AR/intro-to-AR' },
  { label: 'Types of AR', route: '/docs/AR/types-of-AR' },
])
const exerciseMenu = ref([
  { label: 'Augmented Reality Exercise', route: '/exercise/AR/home' },
  { label: 'Computer Vision Exercise', route: '/exercise/CV' },
])
const menuItems = ref([
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Augmented Reality',
    items: arMenu.value,
  },
  {
    label: 'Computer Vision',
    items: cvMenu.value,
  },
  {
    label: 'Exercise',
    items: exerciseMenu.value,
  },
])
</script>

<template>
  <div class="card flex justify-center">
    <Menubar :model="menuItems">
      <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span>{{ item.label }}</span>
          </a>
        </router-link>
        <a v-ripple v-else v-bind="props.action">
          <span>{{ item.label }}</span>
        </a>
      </template>
    </Menubar>
  </div>
</template>
