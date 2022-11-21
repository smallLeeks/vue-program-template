import { fileURLToPath, URL } from 'node:url'
import * as path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// electron
import electron from 'vite-plugin-electron'
/** JSX & TSX support with HMR */
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import eslintPlugin from 'vite-plugin-eslint'
/** antD按需加载 */
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        root: '.',
        plugins: [
            vue({
                template: {
                    compilerOptions: {
                        isCustomElement: tag => tag.startsWith('qys-'),
                    },
                },
            }),
            electron({
                main: {
                    entry: 'electron/main/index.ts', // 主进程文件
                },
                preload: {
                    input: path.join(__dirname, './electron-preload/index.ts'), // 预加载文件
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
            strictPort: true,
            open: false,
            proxy: {
                '/api': {
                    target: '',
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, ''),
                },
            },
        },
        build: {
            emptyOutDir: false,
        },
    }
})
