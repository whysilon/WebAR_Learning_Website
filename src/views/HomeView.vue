<script>
import { Card, Divider, Image } from 'primevue'
</script>

<template>
  <div class="container">
    <div class="content">
      <h1>Augmented Reality</h1>
      <p>lorem ipsum lmao</p>
    </div>
    <Card class="content">
      <template #content>
        <Image src="/src/assets/picture.png"></Image>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.content {
  flex: 1;
  max-width: 50%;
  margin: 1rem;
}
</style>
