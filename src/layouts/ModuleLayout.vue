<template>
    <div class="module-container">
      <ScrollPanel>
        <router-view/>
      </ScrollPanel>
      <div class="module-content">
        <router-view name="module"/>
      </div>
    </div>
</template>
  
<script setup>
import { ScrollPanel } from 'primevue';

</script>

<style scoped>
.module-menu {
    z-index: 1;
}
.module-container {
  display: flex;
  height: 100%;
}
.module-content {
  margin-left: 1rem;
  margin-right: 1rem;

}
</style>