<template>
  <div class="pp-cart">
    <h1>Cart</h1>
    <pp-cart-item
        v-for="item in cart_data"
        :key="item.article"
        :cart_item_data="item"
    />
  </div>
</template>

<script>
import ppCartItem from "@/components/pp-cart-item.vue";

export default {
  components: {ppCartItem},
  props: {
    cart_data: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>