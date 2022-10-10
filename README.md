# vue-program-template

+ 全局安装以下库
    + `nodeJS > 14`
    + `prettier`

## [vite插件](https://juejin.cn/post/6998059092497399845)

## 工程目录
参考目录
[链接](https://github.com/alan2207/bulletproof-react)
[链接](https://github.com/antfu)

``` tree
vue-program-template
├─ dist
│  ├─ assets
│  │  ├─ AboutView.efa8173c.js
│  │  ├─ HomeView.3f909597.css
│  │  ├─ HomeView.8d9bc44a.js
│  │  ├─ index.5cb2f003.css
│  │  └─ index.eab10ac2.js
│  ├─ favicon.ico
│  └─ index.html
├─ public
│  └─ favicon.ico
├─ src
│  ├─ assets
│  │  ├─ base.css
│  │  ├─ logo.svg
│  │  └─ main.css
│  ├─ components
│  │  └─ VModal
│  │     └─ index.vue
│  ├─ router
│  │  └─ index.ts
│  ├─ stores
│  │  ├─ counter.ts
│  │  └─ index.ts
│  ├─ types
│  │  ├─ index.ts
│  │  └─ vue-types.ts
│  ├─ views
│  │  ├─ AboutView.vue
│  │  └─ HomeView.vue
│  ├─ App.vue
│  ├─ auto-import.d.ts
│  └─ main.ts
├─ CHANGLOG.md
├─ commitlint.config.js
├─ components.d.ts
├─ CONTRIBUTING.md
├─ env.d.ts
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ README.md
├─ shims.d.ts
├─ tsconfig.config.json
├─ tsconfig.json
├─ unocss.config.ts
└─ vite.config.ts
```

## 工程搭建

- 参考文章：
[链接](https://cn.vuejs.org/guide/quick-start.html#creating-a-vue-application)
[链接](https://segmentfault.com/a/1190000041954694)
[链接](https://juejin.cn/post/6951649464637636622#heading-15)
[链接](https://juejin.cn/post/7091667988163592222)

- eslint + prettier + husky
    - eslint 解析包
        - @babel/core
        - @typescript-eslint/parser
        ```
        使用自定义解析器，必须使用parserOptions.parser选项。注：tsx下ts断言报错`unexpected token, expected ','`
        ```

    - eslint 相关包
        - eslint
        - eslint-plugin-vue
        - vite-plugin-eslint
        ```
        配置项：['src/**/*.js', 'src/**/*.ts', 'src/**/*.vue', 'src/*.js', 'src/*.ts', 'src/*.vue']
        ```

    - prettier 相关包
        - prettier
        - eslint-config-prettier
        - eslint-plugin-prettier

    - husky 相关包
        - husky
        ```
        npx husky install
        package.json => scripts => `"prepare": "husky install"`
        ```
        - int-staged
        - @commitlint/cli
        ```
        快速创建git hooks的commit-msg钩子: npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
        ```
        - @commitlint/config-conventional

## unocss

1. 配置文件
- unocss.config.ts

2. 相关资料
- [github](https://github.com/unocss/unocss)

- [交互文档](https://uno.antfu.me/)

- [为什么使用](https://zhuanlan.zhihu.com/p/425814828)

3. unocss插件
- 已配置使用
    - @unocss/preset-attributify [属性化模式](https://github.com/unocss/unocss/tree/main/packages/preset-attributify)
    - @unocss/preset-tagify [css into html](https://github.com/unocss/unocss/tree/main/packages/preset-tagify)

- 未配置使用
    - @unocss/preset-icons [字体图标](https://github.com/unocss/unocss/tree/main/packages/preset-icons)
    - @unocss/preset-web-fonts [web字体](https://github.com/unocss/unocss/tree/main/packages/preset-web-fonts)
    - @unocss/preset-typography [预设排版](https://github.com/unocss/unocss/tree/main/packages/preset-typography)
    - @unocss/preset-rem-to-px [rem to px](https://github.com/unocss/unocss/tree/main/packages/preset-rem-to-px)

4. 扩展
- [tailWindCss](https://www.tailwindcss.cn/docs/padding)
- [windiCss](https://windicss.org/guide/)

## 检查类型和生成类型声明文件
[链接](https://cn.vuejs.org/guide/typescript/overview.html#ide-support)
[npm地址](https://www.npmjs.com/package/vue-tsc)
```vue-tsc
1. type-check: vue-tsc --noEmit

2. build dts: vue-tsc --declaration --emitDeclarationOnly

```

## unplugin-auto-import
自动导入composition api

## xState
+ [文档](https://xstate.js.org/docs)

+ [为什么使用]()

## 状态管理
[pinia](https://pinia.vuejs.org/)

## headless ui
[无ui组件库](https://headlessui.com/)

## vue-types
[文档](https://dwightjack.github.io/vue-types/guide/validators.html#native-validators)