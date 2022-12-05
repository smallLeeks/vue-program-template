import { createApp, h } from 'vue'
import { registerApplication, start } from 'single-spa'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'uno.css'

/**
 * 子应用脚本
 *
 * @param { string } url 子应用脚本文件地址
 * @returns Promise
 */
function runScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = url
        script.onload = resolve
        script.onerror = reject
        const firstScript = document.getElementsByTagName('script')[0]
        firstScript.parentElement.insertBefore(script, firstScript)
    })
}

/**
 * 加载子应用
 *
 * @param { string } url 子应用地址
 * @param { string } appName 子应用名，全局唯一
 * @returns Promise
 */
function loadApp(url, appName) {
    return async () => {
        await runScript(url + '/js/app.js')
        return window[appName]
    }
}

const app1 = {
    name: 'app1',
    app: loadApp('http://localhost:3000', 'app1'),
    activeWhen: location => location.pathname.startsWith('/app1'),
    customProps: {},
}

const app = createApp({
    created() {
        registerApplication(app1)
    },
    mounted() {
        start()
    },
    render: () => h(App),
})

// 全局异常处理器
app.config.errorHandler = (err, vm, info) => {
    console.log('[全局异常]', err, vm, info)
}

app.use(createPinia())
app.use(router)

app.mount('#app')
