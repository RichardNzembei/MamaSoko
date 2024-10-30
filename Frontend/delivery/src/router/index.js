import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Dashboard from '@/views/Dashboard.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Login },
    { path: '/register', component: Register },
    { path: '/dashboard', component: Dashboard }
  ]
})

export default router
