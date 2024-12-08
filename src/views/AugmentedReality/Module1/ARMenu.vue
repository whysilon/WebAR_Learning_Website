<template>
    <div>
        <Menu :model="items" />
    </div>
</template>

<script setup>
import { Menu } from 'primevue';
import { ref } from 'vue';

const items = ref([
    {
        label: 'Home',
    },
    {
        label: 'Home 2'
    }
])
</script>