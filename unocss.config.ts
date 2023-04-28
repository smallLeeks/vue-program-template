import { defineConfig, presetAttributify, presetUno, presetTagify } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
    shortcuts: {},
    theme: {
        screens: {},
        colors: {
            // 品牌色
            primary1: '#e8f5ff',
            primary2: '#b7dafb',
            primary3: '#88bef8',
            primary4: '#0145c5',
            primary5: '#2d7ef1',
            primary: '#015bed',
            // 错误 Danger
            danger1: '#fff2e8',
            danger2: '#fbd5be',
            danger3: '#f8b794',
            danger4: '#c53a13',
            danger5: '#f17645',
            danger6: '#ed521f',
            // 提示 Warning
            warning1: '#fffae8',
            warning2: '#fcecc0',
            warning3: '#f9dc99',
            warning4: '#c77c19',
            warning5: '#f3b64d',
            warning6: '#f0a128',
            // 成功 Success
            success1: '#e8ffeb',
            success2: '#baf0c3',
            success3: '#90e1a0',
            success4: '#1c9946',
            success5: '#49c269',
            success6: '#2bb353',
            // 其他系统颜色 - 氰基蓝 Cyanyl blue
            cyan1: '#e8fffe',
            cyan2: '#cbf2f2',
            cyan3: '#b1e5e6',
            cyan4: '#4495a3',
            cyan5: '#80c6cd',
            cyan6: '#6bb6c0',
            // 薰衣草紫 Lavender Purple
            purple1: '#f2e8ff',
            purple2: '#e5d7fa',
            purple3: '#d8c6f5',
            purple4: '#765ec0',
            purple5: '#bba5eb',
            purple6: '#ad96e6',
            // 填充 - 常规浅色背景
            gray1: '#f7f8fb',
            // 边框 - 浅 或者 填充 - 特殊背景/白底hover悬浮
            gray2: '#f0f2f7',
            // 填充 - 特殊背景
            gray3: '#e1e4eb',
            // 边框（一般）、填充（浅色图标）、文字（置灰信息/禁用）
            gray4: '#ccd0d9',
            // 填充（常规图标）、文字（文本说明）
            gray5: '#9ba3b0',
            // 填充（强调/图标/特殊场景）、文字（次要信息）
            gray6: '#667183',
            // 文字 - 次强调/正文标题/文本
            gray7: '#334259',
            // 文字 - 强调/正文标题
            gray8: '#001330',
        },
        fontFamily: {},
        borderRadius: {
            none: '0',
            sm: '2px',
            DEFAULT: '4px',
            large: '8px',
            full: '50%',
        },
        boxShadow: {
            // 适用场景：白底卡片
            card: '0px 0px 8px rgba(0, 19, 48, 0.08)',
            // 适用场景：右侧抽屉
            right: '-2px 0px 12px rgba(0, 19, 48, 0.08)',
            // 适用场景：用于顶部菜单栏及工具栏
            top: '0px 2px 4px rgba(0, 19, 48, 0.06)',
            // 适用场景：下拉菜单
            down: '0px 2px 8px rgba(0, 19, 48, 0.12)',
            // 适用场景：表格右侧浮层
            table: '-2px 0px 8px rgba(0, 19, 48, 0.08)',
            // 适用场景：气泡卡片
            popConfirm: '0px 4px 20px rgba(0, 19, 48, 0.12)',
            // 适用场景：弹窗对话框
            modal: '0px 2px 16px rgba(0, 19, 48, 0.12)',
        },
        extend: {},
    },
    presets: [
        presetUno(),
        presetRemToPx(),
        presetAttributify({
            prefix: 'qys-',
            prefixedOnly: true,
        }),
        presetTagify({
            prefix: 'qys-',
        }),
    ],
})
