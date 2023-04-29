import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized
} from 'vue-router'
import { nextTick } from 'vue'

import routes from './routes'
import useGlobalStore from '@/stores/modules/global.store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(
  async (
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const globalStore = useGlobalStore()
    globalStore.setLoading(true)
    await nextTick()
    next()
  }
)

router.afterEach(() => {
  const globalStore = useGlobalStore()
  setTimeout(() => {
    globalStore.setLoading(false)
  }, 500)
})

export default router
