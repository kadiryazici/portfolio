import { createApp } from 'vue';
import App from './App.vue';
import router from '/src/router/router';

import Title from '@components/Title/Title.vue';
import Page from '@components/Page/Page.vue';

const app = createApp(App);

app.component('Title', Title);
app.component('Page', Page);

app.use(router);

router.isReady().then(() => {
   app.mount('#app');
});
