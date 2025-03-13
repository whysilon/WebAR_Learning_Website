<script>
import { Card, Divider, Image } from 'primevue'
</script>

<template>
  <div class="container">
    <div class="content">
      <h1>Augmented Reality</h1>
      <p>This is a website to learn AR and its concepts. You can navigate using the top bar to see the respective topics or go straight into exercises which will 
        teach you how to quickly start coding in AR.
      </p>
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
