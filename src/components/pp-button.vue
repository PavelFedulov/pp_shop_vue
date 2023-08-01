<template>
  <button class="pp-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/styles";
  .pp-btn {
    padding: 10px;
    color: #e0e0e0;
    background-color: darkorchid;
    border: none;
    border-radius: $radius*3;
    cursor: pointer;
  }
</style>