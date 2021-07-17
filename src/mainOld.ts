import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';

import App from './App.vue';
import Title from '/src/components/Title/Title.vue';
import Page from '/src/components/Page/Page.vue';

import { routes } from '/src/router/router';
import { useRouteStore } from './store/routeStore';
import { defineComponent } from '@vue/runtime-core';

const router = createRouter({
   history: createWebHistory(),
   routes
});

const app = createApp(App);

app.use(router)
   .use(createPinia())
   .component('Title', Title)
   .component('Page', Page);

router.isReady().then(() => {
   app.mount('#app');
});

router.beforeResolve((to, from) => {
   const routeStore = useRouteStore();
   routeStore.lastPage = (from.meta.page as number) || 0;
   routeStore.currentPage = to.meta.page as number;
});
