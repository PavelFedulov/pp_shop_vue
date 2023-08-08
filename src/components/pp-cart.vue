<template>
  <div class="pp-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="pp-catalog__link_to_cart">Back to Catalog</div>
    </router-link>
    <pp-header>Cart</pp-header>
    <p class="empty_cart" v-if="!CART.length">There are no products in cart...</p>
    <pp-cart-item
        v-for="(item, index) in CART"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
    />
    <div class="pp-cart__total">
      <p class="total__name">Total:</p>
      <p>{{ cartTotalCost }} $</p>
    </div>
  </div>
</template>

<script>
import ppCartItem from "@/components/pp-cart-item.vue";
import {mapActions, mapGetters} from "vuex";
import PpHeader from "@/components/pp-header.vue";

export default {
  components: {PpHeader, ppCartItem},
  props: {
    cart_data: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ]),

    cartTotalCost() {
      let result = []
      if (this.CART.length) {
        for (let item of this.CART) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el
        })
        return result
      } else return 0
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM"
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index)
    },

    decrement(index) {
      this.DECREMENT_CART_ITEM(index)
    },

    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },

  }
}
</script>

<style lang="scss">
@import '@/assets/styles/styles.scss';

.pp-catalog {
  &__link_to_cart {
    position: absolute;
    margin-top: 100px;
    top: 10px;
    right: 10px;
    padding: $padding*2;
    border: solid 1px #aeaeae;
    border-radius: 15px;
  }
}

.pp-cart {
  margin-top: 130px;


  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding*2;
    display: flex;
    justify-content: center;
    background: #25AE68;
    color: #ffffff;
    font-size: 20px;
  }
}

.total__name {
  margin-right: $margin;
}

.empty_cart {
  margin-top: 130px;
}

</style>