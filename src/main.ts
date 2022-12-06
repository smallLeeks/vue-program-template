import { createApp, h } from 'vue'
import singleSpaVue from 'single-spa-vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'uno.css'
import { isWindow } from '@vueuse/core'

const options: {
    el?: string
    render: () => {}
} = {
    el: '#child-vue-app',
    render: () => h(App),
}

// 支持应用独立运行和部署
if (!window.singleSpaNavigate) {
    delete options.el

    const app = createApp(App)

    // 全局异常处理器
    app.config.errorHandler = (err, vm, info) => {
        console.log('[全局异常]', err, vm, info)
    }

    app.use(createPinia())
    app.use(router)

    app.mount('#app')
}

const vueLifecycles = singleSpaVue({
    createApp,
    appOptions: options,
    handleInstance(app) {
        app.use(createPinia())
        app.use(router)
    },
})

export const bootstrap = vueLifecycles.bootstrap // 启动时
export const mount = vueLifecycles.mount // 挂载时
export const unmount = vueLifecycles.unmount // 卸载时

export default vueLifecycles
