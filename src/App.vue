<template>
  <div id="app">
  <pp-main-wrapper>
  </pp-main-wrapper>
  </div>
</template>

<script>
import PpMainWrapper from "@/components/pp-main-wrapper.vue";
export default {
  name: 'app',
  components: {PpMainWrapper},
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir",serif;
  text-align: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img {
  width: 100%;
  height: auto;
}
</style>
