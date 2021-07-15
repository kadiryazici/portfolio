import { createApp } from 'vue';
import App from './App.vue';
import { routes } from '/src/router/router';
import { createRouter, createWebHistory } from 'vue-router';

import '/src/static/prism.css';

import Title from '@components/Title/Title.vue';
import Page from '@components/Page/Page.vue';

const app = createApp(App);

app.component('Title', Title);
app.component('Page', Page);

const router = createRouter({
   history: createWebHistory(),
   routes
});
app.use(router);

router.isReady().then(() => {
   app.mount('#app');
});
