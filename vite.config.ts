import { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const config: UserConfig = {
   plugins: [vue()],
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
      minify: 'esbuild',
      assetsInlineLimit: 0
   }
};

export default config;

function Path(_path: string) {
   return path.resolve(__dirname, _path);
}
