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

    </div>
    <button>Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    cart_item_data: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.cart_item_data
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
  margin-bottom: $margin;

  &__image {
    max-width: 20%
  }
}
</style>