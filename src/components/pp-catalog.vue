<template>
  <div class="pp-catalog">
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
      'PRODUCTS'
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
.pp-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}

.pp-catalog__title {
  align-items: center;
}
</style>