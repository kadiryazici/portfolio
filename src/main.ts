import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';

import App from './App.vue';
import Title from '/src/components/Title/Title.vue';
import Page from '/src/components/Page/Page.vue';
import Heading from '/src/components/Heading/Heading.vue';
import 'virtual:windi.css';

import { routes } from '/src/router/router';
import { useRouteStore } from '/src/store/routeStore';

import { viteSSR } from 'vite-ssr/vue';

export default viteSSR(
   App,
   {
      routes
   },
   ({ app, router, initialState, isClient }) => {
      const head = createHead();
      const pinia = createPinia();

      app.use(router)
         .use(pinia)
         .use(head)
         .component('Title', Title)
         .component('Page', Page)
         .component('Heading', Heading);

      if (isClient) {
         pinia.state.value = initialState.pinia;
      } else {
         initialState.pinia = pinia.state.value;
      }

      router.beforeResolve((to, from) => {
         const routeStore = useRouteStore(pinia);
         routeStore.lastPage = (from.meta.page as number) || 0;
         routeStore.currentPage = to.meta.page as number;
      });

      return {
         head
      };
   }
);
