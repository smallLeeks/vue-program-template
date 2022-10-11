## 分支管理

维护几个以下分支，如果需要增加一个新功能，请基于`master/main`拉取feature分支，然后合并到master

1. `main/master` 发布分支
2. `feature` 开发分支


## 开发流程

`git clone` 且 `$ pnpm/npm install` 安装完依赖后，可以依次运行下面几个常用命令（ci已配置）

1. `$ pnpm run dev` 本地启动项目
2. `$ pnpm run lint` 检查代码风格
3. `$ pnpm run lint:pretty` 代码格式化
4. `$ pnpm run lint:staged` 代码规范和约束
5. `$ pnpm run build` 构建项目版本到dist目录

## [提交规范](./commitlint.config.js)

虽然`lint-staged`每次会对src下所有文件执行lint，导致等待时间过长，但是不建议关闭此husky

- 关闭`husky`
    - 注释`.husky`下`pre-commit`

## [BEM命名规范](https://bemcss.com/)

## 技术选型
✅ 当前使用
✋ 推荐使用

- 状态机和状态管理
```
1. xState ✅
2. pinia ✅
```

- css
```
1. scss ✋
2. tailWindCss ✋
2. windiCss
3. unocss ✅
```

- 组件库
```
1. headless ui ✅
2. antD
3. element plus
```

- 单元测试
```
1. jest ✅
```

## TODO 💪
- ssr
    - (文档)[https://cn.vitejs.dev/guide/ssr.html]
    - (demo)[https://github.com/vitejs/vite/tree/main/playground/ssr-vue]

1. `vue-template` pretty失效

2. `unplugin-vue-components/vite` 自定义组件的声明文件的处理

3. `jest` 单元测试
