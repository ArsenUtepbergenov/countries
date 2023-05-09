import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'

const pinia = createPinia()

import './index.scss'

import App from './App.vue'

createApp(App).use(router).use(pinia).mount('#app')
