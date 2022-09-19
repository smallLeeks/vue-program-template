import { defineConfig, presetAttributify, presetUno, presetTagify } from 'unocss'

export default defineConfig({
    shortcuts: {
        'btn-primary': 'bg-bleuDeFrance text-white rounded-1 text-base py-3 text-center',
    },
    theme: {
        colors: {
            brand: '#2489f2', // 品牌色
            success: '#2bb353', // 绿色
            error: '#ed521f', // 红色
            waring: '#f0a128', // 黄色
        },

        // font: {
        //     fontSize: Object.fromEntries(Array.from({ length: 32 }, (_, i) => [`${( i+ 1) * 4}rpx`, [`${( i+ 1) * 4}rpx`, `${(i + 1) * 2}px`]])),
        // },
    },
    presets: [
        presetAttributify({
            prefix: 'qys-',
            prefixedOnly: true,
        }),
        presetUno(),
        presetTagify({
            prefix: 'qys-',
        }),
    ],
})
