<template>
  <div class="module-container">
    <div>
      <router-view class="scroll-panel" />
    </div>
    <div class="module-content">
      <router-view name="module" />
    </div>
  </div>
</template>

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
  margin-right: 6rem;
}
.scroll-panel {
  position: sticky;
  top: 1rem;
  height: 100vh;
}
</style>
