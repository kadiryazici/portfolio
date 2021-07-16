import { RouteRecordRaw } from 'vue-router';

export const pageRoutes = [
   {
      path: '/',
      name: 'AboutMe',
      component: () => import('/src/pages/AboutMe.vue'),
      meta: {
         page: 1
      }
   },
   {
      path: '/experience',
      name: 'Experience',
      component: () => import('/src/pages/Experience.vue'),
      meta: {
         page: 2
      }
   },
   {
      path: '/knowledge',
      name: 'Knowledge',
      component: () => import('/src/pages/Knowledge.vue'),
      meta: {
         page: 3
      }
   },
   {
      path: '/education',
      name: 'Education',
      component: () => import('/src/pages/Education.vue'),
      meta: {
         page: 4
      }
   },
   {
      path: '/languageskills',
      name: 'LanguageSkills',
      component: () => import('/src/pages/LanguageSkills.vue'),
      meta: {
         page: 5
      }
   },
   {
      path: '/contact',
      name: 'Contact',
      component: () => import('/src/pages/Contact.vue'),
      meta: {
         page: 6
      }
   }
];

export const routes: RouteRecordRaw[] = [
   ...pageRoutes,
   {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      redirect: {
         name: 'AboutMe'
      }
   }
];
