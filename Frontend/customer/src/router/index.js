import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import UserAccount from '../views/UserAccount.vue'
import Cart from '../components/Cart.vue'
import Checkout from '../components/Checkout.vue'
import OrderTracking from '../components/OrderTracking.vue'
import Grocery from '../components/Grocery.vue'
import Shop from '../components/Shop.vue'

import contact from '../components/contact.vue'
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
      path: '/grocery',
      component:Grocery
    },
    {
      path: '/shop',
      component:Shop
    },
    {
      path: '/contact',
      component:contact
    }
  ]
})

export default router
