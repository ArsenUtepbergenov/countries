import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  { path: '/', component: Home },
  {
    path: '/details/:id',
    name: 'Details',
    component: () => import('@/views/Details.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
