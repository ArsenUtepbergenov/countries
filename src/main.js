import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'

const pinia = createPinia()

import App from './App.vue'

import './style.css'

createApp(App).use(router).use(pinia).mount('#app')
