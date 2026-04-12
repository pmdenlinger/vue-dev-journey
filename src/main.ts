import { createApp } from 'vue'
import App from './App.vue'

console.log('FINGERPRINT: Loaded main.ts FROM 01/exercise1.01 at', new Date().toISOString())
console.log('FINGERPRINT: import.meta.url =', import.meta.url)

document.title = 'EXERCISE1.01 RUNNING (main.ts)'

createApp(App).mount('#app')
