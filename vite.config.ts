import { UserConfig } from 'vite';
import path from 'path';
import Vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
import ViteSSR from 'vite-ssr/plugin';
import VueJSX from '@vitejs/plugin-vue-jsx';
import WindiCSS from 'vite-plugin-windicss';
import Legacy from '@vitejs/plugin-legacy';

const config: UserConfig = {
   plugins: [
      VueJSX(),
      Markdown({}),
      ViteSSR(),
      WindiCSS(),
      Legacy(),
      Vue({
         script: {
            refSugar: true
         },
         include: [/\.vue$/, /\.md$/]
      })
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
      outDir: '_app/dist',
      target: 'es2015'
   }
};

export default config;

function Path(_path: string) {
   return path.resolve(__dirname, _path);
}
