<template>
  <div class="pp-cart-item">
    <img
        class="pp-cart-item__image"
        :src="cart_item_data.image"
        alt="img"
    >
    <div class="pp-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }} $</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="pp-cart-item__quantity">
      <p>Qty: </p>
      <span>
        <span @click="decrementItem"
              class="quantity-btn"
        >
          -
        </span>
        {{ this.cart_item_data.quantity }}
        <span @click="incrementItem"
              class="quantity-btn"
        >
          +
        </span>
      </span>
    </div>
    <pp-button
        @click="deleteFromCart"
    >
      Delete
    </pp-button>
  </div>
</template>

<script>

import PpButton from "@/components/pp-button.vue";

export default {
  components: {PpButton},
  props: {
    cart_item_data: {
      type: Object,
      required: true
    }
  },
  methods: {

    deleteFromCart() {
      this.$emit('deleteFromCart')
    },

    decrementItem() {
      this.$emit('decrement')
    },

    incrementItem() {
      this.$emit('increment')
    }
  },
  mounted() {
    const cartItemData = this.cart_item_data;
    cartItemData.quantity = 1;
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/styles";

.pp-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 4px 0 $greyShadow;
  margin-bottom: 20px;

  &__image {
    max-width: 20%
  }
}

button {
  margin-right: 20px;
  cursor: pointer;
}

.quantity-btn{
  cursor: pointer;
}
</style>