<template>
  <div class="pp-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="pp-catalog__link_to_cart">Back to Catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!cart_data.length">There are no products in cart...</p>
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