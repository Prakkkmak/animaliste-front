// From https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/

import { createWebHistory, createRouter } from 'vue-router';
import App from '@/App.vue';
import AnimalDetail from '@/components/animal/AnimalDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App,
  },
  {
    path: '/animals/:id',
    name: 'AnimalDetail',
    component: AnimalDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
