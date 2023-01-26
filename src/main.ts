import { createApp } from 'vue'
import './style.scss'
import router from './router'
import App from './App.vue'
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import { createPinia } from "pinia"
const pinia = createPinia()

createApp(App).use(router).use(pinia).use(Vue3Lottie).mount('#app')
