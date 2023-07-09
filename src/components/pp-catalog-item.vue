<template>
  <div class="pp-catalog-item">
    <img
        class="pp-catalog-item__image"
        :src="product_data.image"
        alt="img"
    >
    <p class="pp-catalog-item__name">{{ product_data.name }}</p>
    <p class="pp-catalog-item__price">Price: {{ product_data.price}} $</p>
    <button
        class="pp-catalog-item__add__to__cart__btn btn"
        @click="sendDataToParent"
    >Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "pp-catalog-item",
  props: {
    product_data: {
      type: Object,
      required: true,
    }
  },
  methods: {
    sendDataToParent() {
      this.$emit('sendArticle', this.product_data.article)
    }
  }
}

</script>

<style lang="scss">
@import "@/assets/styles/styles";

.pp-catalog-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 $greyShadow;
  padding: $padding*2;
  margin-bottom: $margin*2;
}
</style>