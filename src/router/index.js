import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Auth from '../pages/Auth.vue'
import News from '../pages/News.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  },
  {
    path: '/news',
    name: 'news',
    component: News
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
