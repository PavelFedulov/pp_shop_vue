import {createStore} from "vuex";
import axios from "axios";


export default createStore({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            state.cart.push(product)
        }
    },
    actions: {
        GET_PRODUCT_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products
                })
                .catch((error) => {
                    alert("Error")
                    return error
                })
        },
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product);
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    },
})

