import type { RouteRecordRaw } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import requiresAuth from '@/middleware/requiresAuth'
import requiresGuest from '@/middleware/requiresGuest'

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
    component: LoginView,
    beforeEnter: requiresGuest
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/ForgotPasswordView.vue'),
    beforeEnter: requiresGuest
  },
  {
    path: '/password-change/:hash',
    name: 'password-change',
    component: () => import('@/views/PasswordChangeView.vue'),
    beforeEnter: requiresGuest
  }
]

export default routes
