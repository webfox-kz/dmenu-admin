import type { RouteRecordRaw } from 'vue-router'

import HomeView from '@/views/dashboard/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import requiresAuth from '@/middleware/requiresAuth'
import requiresGuest from '@/middleware/requiresGuest'

const guestRoutes = ['login', 'forgot-password', 'password-change']

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: requiresAuth
  },
  {
    path: '/registrations',
    name: 'registrations',
    component: () => import('@/views/dashboard/RegistrationsView.vue'),
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
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/errors/NotFound.vue'),
    name: 'not-found'
  }
]

export default routes

export { guestRoutes }
