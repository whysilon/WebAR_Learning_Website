<script>
import { Card, Divider, Image } from 'primevue'
</script>

<template>
  <div class="container">
    <div class="content">
      <h1> Augmented Reality</h1>
      <p> lorem ipsum lmao</p>
    </div>
    <Card class="content">
      <template #content>
        <Image src="/src/assets/picture.png" ></Image>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.container {
  display: flex;                /* Use Flexbox to align child divs side by side */
  gap: 2rem;                    /* Adds space between the two sections */
  align-items: flex-start;      /* Align items at the top */
}

.content {
  flex: 1;                      /* Make both sections equal width */
  max-width: 50%;               /* Optional: Control the width */
  margin: 1rem;             /* Add space between the sections */
}
</style>