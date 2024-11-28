<template>
    <ModuleLayout :items="externalItems" />
</template>
  
<script>
import ModuleLayout from '@/layouts/ModuleLayout.vue';
import { ref } from 'vue';

export default {
components: {
    ModuleLayout,
},
setup() {
    const externalItems = ref([
    {
        label: 'Module 1',
        items: [
        { label: 'Submodule 1' },
        { label: 'Submodule 2' },
        { label: 'Submodule 3' },
        ],
    },
    {
        label: 'Module 2',
        items: [
        { label: 'Submodule A' },
        { label: 'Submodule B' },
        ],
    },
    ]);

    return { externalItems };
},
};
</script>