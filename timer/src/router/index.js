import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main.vue'
import About from '../components/About.vue'
import Account from '../components/Account.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
  ]
})

export default router
