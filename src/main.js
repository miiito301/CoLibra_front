
/*main.js */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // ここでルーターを読み込む
import "./assets/output.css"

createApp(App).use(router).mount('#app')
