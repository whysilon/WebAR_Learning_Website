<template>
  <div class="exercise-container">
    <router-view id="exercise-content" />
  </div>
</template>

<style scoped>
.exercise-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 2rem;
  margin-right: 6rem;
}
</style>
