<template>
  <div class="container">
    <p>Hi</p>

    <iframe class="camera" src='/embedded' ></iframe>

  </div>
</template>

<script>

</script>

<style scoped>
.camera {
  flex-grow: 1;
  width: 100%;
  overflow: hidden;
}
.text {
  flex: 1;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  height: 100vh;
}
</style>