import { createApp } from 'vue'

import '@/assets/scss/main.scss'
import pinia from './stores'
import router from './router'
import App from './App.vue'
import DashboardLayout from './components/DashboardLayout.vue'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.component('DashboardLayout', DashboardLayout)

app.mount('#app')
