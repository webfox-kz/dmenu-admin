import { createPinia } from 'pinia'

import useGlobalStore from './modules/global.store'
import useAuthStore from './modules/auth.store'
import type { Router } from 'vue-router'
import router from '@/router'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    router: Router
  }
}

const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = router
})

export default pinia

export { useGlobalStore, useAuthStore }
