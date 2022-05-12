import { createRouter, createWebHashHistory } from 'vue-router'

import ProductApp from "./components/ProductApp.vue"



const routes = [{
        path: '/',
        component: ProductApp,
        name: ' productApp'
    },

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router