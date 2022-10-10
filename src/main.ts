import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'uno.css'

const app = createApp(App)

// 全局异常处理器
app.config.errorHandler = (err, vm, info) => {
    console.log('[全局异常]', err, vm, info)
}

app.use(createPinia())
app.use(router)

app.mount('#app')
