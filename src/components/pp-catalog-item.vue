<template>
  <div class="pp-catalog-item">
    <img
        class="pp-catalog-item__image"
        :src="product_data.image"
        alt="img"
    >
    <p class="pp-catalog-item__name">{{ product_data.name }}</p>
    <p class="pp-catalog-item__price">Price: {{ formattedMoney(product_data.price) }} $</p>
    <pp-button
        class="pp-catalog-item__add__to__cart__btn btn"
        @click="addToCart"
    >Add to cart
    </pp-button>
  </div>
</template>

<script>
import PpButton from "@/components/pp-button.vue";
import formattedMoney from "@/filters/formattedMoney";
export default {
  name: "pp-catalog-item",
  components: {PpButton},
  props: {
    product_data: {
      type: Object,
      required: true,
    }
  },
  methods: {
    formattedMoney,

    addToCart() {
      this.$emit('addToCart',this.product_data)
    }
  },
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
  border-radius: 10px;
  padding: $padding*2;
  margin-bottom: 30px;
}

.pp-catalog-item__add__to__cart__btn{
  width: 50%;
}
</style>