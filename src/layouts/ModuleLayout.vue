<template>
    <Splitter>
        <SplitterPanel class="flex" :size="20" :minSize="10">
            <ScrollPanel style="width: 100%; height: 100%; overflow-y: auto;">
                <Menu class="module-menu" :model="items" />
            </ScrollPanel>  
        </SplitterPanel>
        <SplitterPanel class="flex" :size="80">
            <ModuleContent/>
        </SplitterPanel>
    </Splitter>
</template>
  
<script setup>
import ModuleContent from '@/components/ModuleContent.vue';
import { Menu, ScrollPanel, Splitter, SplitterPanel } from 'primevue';
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
.navbar {
  z-index: 10;
}
</style>