import { defineStore } from 'pinia';

export const useRouteStore = defineStore({
   id: 'RouteStore',
   state: () => ({
      lastPage: 0,
      currentPage: 1
   })
});
