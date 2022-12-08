import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import * as path from 'path'

import vue from '@vitejs/plugin-vue'
/** JSX & TSX support with HMR */
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import eslintPlugin from 'vite-plugin-eslint'
/** antD按需加载 */
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'

import { OUTPUT_DIR } from './build/constant'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        base: './',
        root: '.',
        plugins: [
            vue({
                template: {
                    compilerOptions: {
                        isCustomElement: tag => tag.startsWith('qys-'),
                    },
                },
            }),
            vueJsx(),
            Unocss(),
            AutoImport({
                include: [
                    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                    /\.vue$/,
                    /\.vue\?vue/, // .vue
                ],
                imports: [
                    'vue',
                    'vue-router',
                    'pinia',
                    '@vueuse/core',
                    {
                        '@xstate/vue': [
                            'useMachine',
                            'useActor',
                            'useInterpret',
                            'useSelector',
                            'useSpawn',
                        ],
                    },
                ],
                dts: './src/auto-import.d.ts',
                eslintrc: {
                    enabled: false,
                },
            }),
            eslintPlugin({
                include: [
                    'src/**/*.js',
                    'src/**/*.ts',
                    'src/**/*.vue',
                    'src/*.js',
                    'src/*.ts',
                    'src/*.vue',
                ],
                cache: false,
            }),
            Components({
                resolvers: [HeadlessUiResolver()],
                dirs: 'src/components',
                extensions: ['vue', 'tsx', 'jsx'],
                dts: true,
                types: [
                    {
                        from: 'vue-router',
                        names: ['RouterLink', 'RouterView'],
                    },
                ],
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        server: {
            host: '0.0.0.0',
            port: 4001,
            strictPort: true,
            open: true,
            proxy: {
                '/api': {
                    target: '',
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, ''),
                },
            },
        },
        define: {
            'process.env': {},
        },
        build: {
            target: 'es2015',
            lib: {
                name: 'app1',
                entry: path.resolve(__dirname, './src/main.ts'),
                formats: ['umd'],
                fileName: 'child-app1',
            },
            minify: 'terser', // 混淆器，terser构建后文件体积更小
            outDir: OUTPUT_DIR, // 指定输出路径
            terserOptions: {
                compress: {
                    keep_infinity: true,
                },
            },
            rollupOptions: {
                input: 'index.html',
                format: 'system',
                preserveEntrySignatures: true,
            },
            chunkSizeWarningLimit: 2000,
        },
    }
})
