import { createApp, h } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'uno.css'

let appDom: any = null

const isQiankun = window.__POWERED_BY_QIANKUN__

function render() {
    const app = createApp(App)
    // 全局异常处理器
    app.config.errorHandler = (err, vm, info) => {
        console.log('[全局异常]', err, vm, info)
    }

    app.use(createPinia())
    app.use(router)

    app.mount('#app')
    appDom = app
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
    console.log('react app bootstraped')
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: any) {
    console.log('让我们来看看mount里面有啥', props)
    if (!appDom) {
        render()
    }
    console.log('此时的appdom是什么呢', appDom)
    appDom.mount(
        props.container ? props.container.querySelector('#child-site_app') : '#child-site_app',
    )
}

if (!isQiankun) {
    render()
    appDom.mount('#child-app')
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props: any) {
    console.log('让我们来看看unmount里面有啥', props)
    if (!appDom) {
        render()
    }
    appDom.unmount()
    appDom = null
}
