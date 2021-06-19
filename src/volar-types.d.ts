import { RouterLink, RouterView } from 'vue-router';
import Title from '@components/Title/Title.vue';
import Page from '@components/Page/Page.vue';

declare module 'vue' {
   interface GlobalComponents {
      RouterLink: typeof RouterLink;
      RouterView: typeof RouterView;
      Title: typeof Title;
      Page: typeof Page;
   }
}
