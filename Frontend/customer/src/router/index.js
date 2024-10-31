import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import UserAccount from '../views/UserAccount.vue'
import Cart from '../components/Cart.vue'
import Checkout from '../components/Checkout.vue'
import OrderTracking from '../components/OrderTracking.vue'
import ProductDetails from '../components/ProductDetails.vue'
import ProductList from '../components/ProductList.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/useraccount',
      component: UserAccount
    },
    {
      path: '/cart',
      component:Cart
    },
    {
      path: '/checkout',
      component: Checkout
    },
    {
      path: '/ordertracking',
      component: OrderTracking
    },
    {
      path: '/productdetails',
      component: ProductDetails
    },
    {
      path: '/productlist',
      component:ProductList
    },
  ]
})

export default router
