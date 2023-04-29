import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

import * as jwt from '@/plugins/jwt'

export default function requiresGuest(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void {
  const token = jwt.getToken()

  if (token) {
    next({ name: 'home' })
    return
  }

  next()
}
