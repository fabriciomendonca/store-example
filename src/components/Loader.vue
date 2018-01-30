<template>
  <div class="loader">
    <div class="loader__animation">Loading...</div>
  </div>
</template>

<script>
export default {
  name: 'loader'
}
</script>

<style scoped>
.loader {
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
}
.loader .loader__animation {
  color: #666;
}
</style>
