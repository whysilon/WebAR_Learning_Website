<template>
  <p>Test</p>
    <router-view/>
    <router-view name="helper"/>
  <div>
  </div>  
</template>
  
<script setup>
import { ScrollPanel } from 'primevue';
import { defineProps } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

</script>

<style scoped>
.module-menu {
    z-index: 1;
}
</style>