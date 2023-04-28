module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended', // 使用推荐的eslint
        'plugin:vue/vue3-recommended', // 使用插件支持vue3
        'plugin:prettier/recommended',
        'eslint-config-prettier',
        './.eslintrc-auto-import.json',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
            jsx: true,
        },
        requireConfigFile: false,
        parser: '@typescript-eslint/parser',
        babelOptions: {
            parserOpts: {
                plugins: ['jsx'],
            },
        },
    },
    // eslint-plugin-vue
    plugins: [
        'vue', // 引入vue的插件 vue <==> eslint-plugin-vue
        'prettier', // 引入规范插件  prettier <==>  eslint-plugin-prettier
    ],
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
        JSX: true,
    },
    // 这里时配置规则的,自己看情况配置
    rules: {
        'no-console': 'off', // 禁止出现 console
        'no-debugger': 'error', // 禁止出现 debugger
        'no-duplicate-case': 'error', // 禁止出现重复 case
        'no-empty': 'error', // 禁止出现空语句块
        'no-func-assign': 'error', // 禁止对 function 声明重新赋值
        'no-unreachable': 'error', // 禁止出现 return/throw 之后的代码块
        'no-else-return': 'error', // 禁止 if 语句中 return 语句之后有 else 块
        'no-lone-blocks': 'error', // 禁用不必要的嵌套块
        'no-return-assign': 'off', // 禁止在 return 语句中使用赋值语句(暂时关闭，和 react/no-string-refs 冲突)
        'no-return-await': 'off', // 禁用不必要的 return-await (暂时关闭)
        'no-self-compare': 'error', // 禁止自身比较表达式
        'no-useless-catch': 'error', // 禁止不必要的 catch 子句
        'no-useless-return': 'error', // 禁止不必要的 return 语句
        'no-useless-call': 'off', // 禁止不必要的 .call() 和 .apply() (暂时关闭)
        'no-var': 'error', // 禁止出现 var，用 let 和 const 代替
        'prefer-const': 'error', // 初始化赋值后从未被修改过的变量更偏好使用 const
        'no-delete-var': 'off', // 允许出现 delete 变量的使用(暂时关闭)
        'no-shadow': 'off', // 允许变量声明与外层作用域的变量同名(暂时关闭)
        'dot-notation': 'error', // 要求尽可能地使用点号
        'default-case': 'error', // 要求 switch 语句中有 default 分支，除非明确注释 no default
        eqeqeq: 'off', // 要求使用 === 和 !==(暂时关闭)
        curly: 'off', // 要求所有控制语句使用一致的括号风格(暂时关闭)
        camelcase: 'off', // 不强制要求使用骆驼拼写法命名约定(暂时关闭)
        'max-depth': ['warn', 4], // 警告可嵌套的块的最大深度 4
        'max-statements': ['warn', 100], // 函数块最多允许的的语句数量 100
        'max-nested-callbacks': ['error', 3], // 要求回调函数最大嵌套深度 3
        'max-statements-per-line': ['error', { max: 1 }], // 要求每一行中所允许的最大语句数量
        quotes: ['error', 'single', 'avoid-escape'], // 要求统一使用单引号符号
        'no-unused-vars': 'off', // 禁止未使用过的变量(暂时关闭)
        'vue/singleline-html-element-content-newline': 0, // 关闭单行元素必须换行符
        'vue/multiline-html-element-content-newline': 0, // 关闭多行元素必须换行符
        // 要求每一行标签的最大属性不超五个
        'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
        'vue/multi-word-component-names': 'off', // 关闭vue组件名校验
        // 要求html标签的缩进为需要4个空格
        'vue/html-indent': [
            'warn',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        // 取消关闭标签不能自闭合的限制设置
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
    },
};
