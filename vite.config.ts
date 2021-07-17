import { UserConfig } from 'vite';
import path from 'path';
import Vue from '@vitejs/plugin-vue';
import Legacy from '@vitejs/plugin-legacy';
import Markdown from 'vite-plugin-md';
import Prism from 'markdown-it-prism';
import ViteSSR from 'vite-ssr/plugin';

const config: UserConfig = {
   plugins: [
      Vue({
         script: {
            refSugar: true
         },
         include: [/\.vue$/, /\.md$/]
      }),
      // Legacy(),
      Markdown({
         markdownItUses: [Prism]
      }),
      ViteSSR()
   ],
   css: {
      preprocessorOptions: {
         scss: {
            additionalData: `
                  @use "/src/scss/vars";
                  @use "/src/scss/mix";
               `
         }
      }
   },
   resolve: {
      alias: {
         '@components': Path('/src/components'),
         '@helpers': Path('/src/helpers/index.ts'),
         '@store': Path('/src/store/store.ts')
      }
   },
   build: {
      polyfillDynamicImport: true,
      assetsInlineLimit: 0,
      outDir: './_app/dist'
   }
};

export default config;

function Path(_path: string) {
   return path.resolve(__dirname, _path);
}
