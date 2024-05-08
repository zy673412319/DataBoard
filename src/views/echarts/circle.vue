<template>
  <div class="progress-bar-container">
    <div class="progress-bar" :style="{ width: progress + '%' }"></div>
  </div>
</template>
 
<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      required: true,
      validator: value => value >= 0 && value <= 100
    }
  }
}
</script>
 
<style scoped>
.progress-bar-container {
  width: 100%;
  background-color: rgb(52 67 92);
  border-radius: 4px;
  overflow: hidden;
}
 
.progress-bar {
  height: 8px;
  background-color: rgb(21 253 234);
  border-radius: 4px;
  transition: width 0.5s ease;
}
</style>