import { useAuthStore } from '@/stores'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

import * as jwt from '@/plugins/jwt'

export default function requiresAuth(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void {
  const token = jwt.getToken()

  if (!token) {
    next({ name: 'login' })
    return
  } else {
    const authStore = useAuthStore()

    authStore
      .fetchUser()
      .then(() => {
        next()
      })
      .catch(() => {
        authStore.logout()
        next({ name: 'login' })
      })
  }
}
