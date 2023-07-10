import {createRouter, createWebHistory} from "vue-router";
import ppCatalog from "@/components/pp-catalog.vue";
import ppCart from "@/components/pp-cart.vue";

const routes = [
    {
        path: '/',
        name: 'catalog',
        component: ppCatalog
    },
    {
        path: '/cart',
        name: 'cart',
        component: ppCart,
        props: true
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;