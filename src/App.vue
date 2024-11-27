<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const text = ref('')
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
