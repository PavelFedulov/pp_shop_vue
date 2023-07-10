<template>
  <div class="pp-main-wrapper">
    <router-view v-slot="{Component, route}">
      <keep-alive>
        <component :is="Component" :key="route.path"/>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "pp-main-wrapper",
  props: {},
  data() {
    return {}
  },
  computed: {
  },
  methods: {},
  watch: {},
  mounted() {}
}
</script>

<style lang="scss">
.pp-main-wrapper {
  max-width: 1080px;
  margin: 0 auto;
}
</style>