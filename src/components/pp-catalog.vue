<template>
  <div class="pp-catalog">
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="pp-catalog__link_to_cart">Cart: {{ CART.length }}</div>
    </router-link>
    <h1 class="pp-catalog__title">Catalog</h1>
    <div class="pp-catalog__list">
      <pp-catalog-item
          v-for="product in PRODUCTS"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
      />
      <!--Связываем каждый объект с объектом переданным в props в дочерний pp-catalog-item-->
    </div>
  </div>
</template>

<script>
import ppCatalogItem from "@/components/pp-catalog-item.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "pp-catalog",
  components: {ppCatalogItem},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCT_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.GET_PRODUCT_FROM_API()
        .then((response) => {
          if (response.data) {
            console.log("Data arrived")
          }
        })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';

.pp-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  &__link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding*2;
    border: solid 1px #aeaeae;
  }
}
</style>