<template>
  <div class="pp-main-wrapper">
    <pp-catalog></pp-catalog>
    <pp-cart
        v-if="CART.length"
        :cart_data="CART"
    />
  </div>
</template>

<script>
import PpCatalog from "@/components/pp-catalog.vue";
import PpCart from "@/components/pp-cart.vue";
import {mapGetters} from "vuex";

export default {
  name: "pp-main-wrapper",
  components: {PpCart, PpCatalog},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  },
  methods: {},
  watch: {},
  mounted() {
    console.log("I am alive")
  }
}
</script>

<style lang="scss">
.pp-main-wrapper {
  max-width: 1080px;
  margin: 0 auto;
}
</style>