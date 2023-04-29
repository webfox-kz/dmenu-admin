import type { RouteRecordRaw } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import requiresAuth from '@/middleware/requiresAuth'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: requiresAuth
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

export default routes
