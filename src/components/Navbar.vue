<script setup>
import { Menubar } from 'primevue'
import { ref } from 'vue'

const optionMenu = ref([{ label: 'Option 1' }, { label: 'Option 2' }, { label: 'Option 3' }])

const otherMenu = ref([{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }])

const menuItems = ref([
  {
    label: 'Options',
    items: optionMenu,
  },
  {
    label: 'Other',
    items: otherMenu,
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
        <span>{{ item.label }}</span>
      </template>
    </Menubar>
  </div>
</template>
