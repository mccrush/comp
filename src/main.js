import { createApp } from 'vue'
import App from './App'
import './registerServiceWorker'

let app

if (!app) {
  app = createApp(App).mount('#app')
}