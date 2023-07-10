<template>
  <div class="pp-cart">
    <h1>Cart</h1>
    <pp-cart-item
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import ppCartItem from "@/components/pp-cart-item.vue";
import {mapActions} from "vuex";

export default {
  components: {ppCartItem},
  props: {
    cart_data: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions([
        'DELETE_FROM_CART'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style scoped>

</style>