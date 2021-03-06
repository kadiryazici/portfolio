import { RouterLink, RouterView } from 'vue-router';
import Title from '@components/Title/Title.vue';
import Page from '@components/Page/Page.vue';
import Heading from '/src/components/Heading/Heading.vue';

declare module 'vue' {
   interface GlobalComponents {
      RouterLink: typeof RouterLink;
      RouterView: typeof RouterView;
      Title: typeof Title;
      Page: typeof Page;
      Heading: typeof Heading;
   }
}
