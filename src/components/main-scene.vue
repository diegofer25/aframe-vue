<template>
  <div class="main-scene">
    <a-scene>
      <a-box
        color="red"
        position="0 2 -5"
        rotation="0 45 45"
        scale="2 2 2"
      ></a-box>
      <a-entity environment="preset: forest; dressingAmount: 500"></a-entity>
    </a-scene>
  </div>
</template>

<script>
export default {
  name: "main-scene"
};
</script>

<style scoped lang="scss"></style>
