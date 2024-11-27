<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>

<template>
  <div class="layout-container">
    <Navbar />
    <main class="main-content">
      <!-- This is where child components will be rendered -->
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1; /* Pushes the footer to the bottom if content is less */
}
</style>
