# vue-program-template

+ 全局安装以下库
    + `nodeJS > 14`
    + `prettier`

## unplugin-auto-import
自动导入composition api

## 目录结构参考
[链接]https://github.com/alan2207/bulletproof-react

## eslint + prettier + husky
[链接](https://segmentfault.com/a/1190000041954694)
[链接](https://juejin.cn/post/6951649464637636622#heading-15)


## unocss
1、配置文件
+ unocss.config.ts

2、相关资料
+ [github](https://github.com/unocss/unocss)

+ [交互文档](https://uno.antfu.me/)

+ [为什么使用](https://zhuanlan.zhihu.com/p/425814828)

3、unocss插件
+ 已配置使用
    + @unocss/preset-attributify [属性化模式](https://github.com/unocss/unocss/tree/main/packages/preset-attributify)
    + @unocss/preset-tagify [css into html](https://github.com/unocss/unocss/tree/main/packages/preset-tagify)

+ 未配置使用
    + @unocss/preset-icons [字体图标](https://github.com/unocss/unocss/tree/main/packages/preset-icons)
    + @unocss/preset-web-fonts [web字体](https://github.com/unocss/unocss/tree/main/packages/preset-web-fonts)
    + @unocss/preset-typography [预设排版](https://github.com/unocss/unocss/tree/main/packages/preset-typography)
    + @unocss/preset-rem-to-px [rem to px](https://github.com/unocss/unocss/tree/main/packages/preset-rem-to-px)

4、扩展
+ [tailWindCss](https://www.tailwindcss.cn/docs/padding)
+ [windiCss](https://windicss.org/guide/)

## xState
+ [文档](https://xstate.js.org/docs)

+ [为什么使用]()

## 状态管理
[pinia](https://pinia.vuejs.org/)

## 目录
``` tree
src
├─ assets
│  ├─ base.css
│  ├─ logo.svg
│  └─ main.css
├─ components
│  └─ Other.tsx
├─ router
│  └─ index.ts
├─ stores
│  └─ counter.ts
├─ views
│  ├─ AboutView.vue
│  └─ HomeView.vue
├─ App.vue
├─ auto-import.d.ts
└─ main.ts
```

## TODO SSR实现
(文档)[https://cn.vitejs.dev/guide/ssr.html]
(demo)[https://github.com/vitejs/vite/tree/main/playground/ssr-vue]

## TODO 暂未解决问题
1. `vue-template` pretty失效
2. `@ant-design/icons-vue` 全局自动导入