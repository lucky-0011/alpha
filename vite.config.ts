import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import UnoCSS from 'unocss/vite'

import { resolve, dirname } from 'node:path'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  base: "/alpha/",
  plugins: [
    vue(),
    vueDevTools(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vue-i18n'],
      dirs: ['./src/stores/modules/**'],
      // 注意事项：项目启动时，自动生成auto-imports.d.ts文件的路径
      dts: './src/types/auto-imports.d.ts',
      resolvers: [ElementPlusResolver({
        importStyle: "sass"
      })],
    }),
    Components({
      // 注意事项：项目启动时，自动往auto-imports.d.ts文件中生成新组件的声明(没有该文件时生成该文件；删除组件时不会在该文件中删除对应组件)
      dts: './src/types/components.d.ts',
      resolvers: [ElementPlusResolver({
        importStyle: "sass"
      })],
    }),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), 'src/locales/lang/**'),
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/element.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    open: true,
    port: 8888,
    host: '0.0.0.0'
  }
})
