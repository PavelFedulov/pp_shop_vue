<template>
  <div class="pp-catalog">
    <h1 class="pp-catalog__title">Catalog</h1>
    <div class="pp-catalog__list">
      <pp-catalog-item
        v-for="product in products"
        :key="product.article"
        :product_data="product"
        @sendArticle="showCardArticleInConsole"
      />
      <!--Связываем каждый объект с объектом переданным в props в дочерний pp-catalog-item-->
    </div>
  </div>
</template>

<script>
import ppCatalogItem from "@/components/pp-catalog-item.vue";

export default {
  name: "pp-catalog",
  components: {ppCatalogItem},
  data() {
    return {
      products: [
        {
          image: "https://mir-s3-cdn-cf.behance.net/projects/404/6fd236163258005.Y3JvcCwzNTc5LDI4MDAsMjEyLDA.png",
          name: "iPhone 1",
          price: 100,
          article: "IP1",
          available: true
        },
        {
          image: "https://mir-s3-cdn-cf.behance.net/projects/404/6fd236163258005.Y3JvcCwzNTc5LDI4MDAsMjEyLDA.png",
          name: "iPhone 2",
          price: 100,
          article: "IP2",
          available: false
        },
        {
          image: "https://mir-s3-cdn-cf.behance.net/projects/404/6fd236163258005.Y3JvcCwzNTc5LDI4MDAsMjEyLDA.png",
          name: "iPhone 3",
          price: 150,
          article: "IP3",
          available: true
        },
        {
          image: "https://mir-s3-cdn-cf.behance.net/projects/404/6fd236163258005.Y3JvcCwzNTc5LDI4MDAsMjEyLDA.png",
          name: "iPhone 4",
          price: 200,
          article: "IP4",
          available: false
        },
        {
          image: "https://mir-s3-cdn-cf.behance.net/projects/404/6fd236163258005.Y3JvcCwzNTc5LDI4MDAsMjEyLDA.png",
          name: "iPhone 5",
          price: 300,
          article: "IP5",
          available: false
        },
        {
          image: "https://mir-s3-cdn-cf.behance.net/projects/404/6fd236163258005.Y3JvcCwzNTc5LDI4MDAsMjEyLDA.png",
          name: "iPhone 6",
          price: 350,
          article: "IP6",
          available: true
        }
      ]
    }
  },
  methods: {
    showCardArticleInConsole (data) {
      console.log(data)
    }
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