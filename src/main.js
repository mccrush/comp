import { createApp } from 'vue'
import App from './App'

let app

if (!app) {
  app = createApp(App).mount('#app')
}