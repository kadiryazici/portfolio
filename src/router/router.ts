import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const routes = <RouteRecordRaw[]>[
   {
      path: '/',
      name: 'Home',
      redirect: {
         name: 'SpesificPage',
         params: {
            page: 0
         }
      }
   },
   {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      redirect: {
         name: 'SpesificPage',
         params: {
            page: 0
         }
      }
   },
   {
      path: '/:page(\\d+)',
      name: 'SpesificPage',
      component: () => import('/src/pages/Home.vue')
   }
];
