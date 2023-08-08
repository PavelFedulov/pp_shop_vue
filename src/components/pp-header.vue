<template>
  <div class="header">
    <div class="header__title">
      <h1><slot></slot></h1>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 998;
  box-shadow: -1px 10px 11px -4px rgba(22, 66, 99, 0.35);
  background-color: aliceblue;
}
</style>