<script setup>
import { Menubar } from 'primevue'
import { ref } from 'vue'

const cvMenu = ref([
  { label: 'Option 1', link: 'option1' },
  { label: 'Option 2', link: 'option2' }, 
  { label: 'Option 3', link: 'option3' }
])

const arMenu = ref([
  { label: 'Item 1', link: 'item1' }, 
  { label: 'Item 2', link: 'item2' }, 
  { label: 'Item 3', link: 'item3' }
])

const menuItems = ref([
  {
    label: 'Computer Vision',
    items: cvMenu,
  },
  {
    label: 'Augmented Reality',
    items: arMenu,
  },
])

const toggle = (event) => {
  menu.value.toggle(event)
}
</script>

<template>
  <div class="card flex justify-center">
    <Menubar :model="menuItems">
      <template #item="{ item, props, hasSubmenu, root }">
        <router-link :to="item.link" custom>
          <a v-ripple :href="item.link" v-bind="props.action" @click="navigate">
            <span>{{ item.label }}</span>
          </a>
       </router-link>
      </template>
    </Menubar>
  </div>
</template>
