<script setup>
import { Menubar } from 'primevue'
import { ref } from 'vue'

const cvMenu = ref([
  { label: 'What is Augmented Reality', route: '/docs/AR' },
  { label: 'Option 2', route: '/option2' },
  { label: 'Option 3', route: '/option3' },
])

const arMenu = ref([
  { label: 'Introduction to AR', route: '/docs/intro-to-AR' },
  { label: 'Types of AR', route: '/docs/types-of-AR' },
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
