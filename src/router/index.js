// From https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/

import { createWebHistory, createRouter } from 'vue-router';
import Animals from '@/components/animal/Animals';
import AnimalDetail from '@/components/animal/detail/AnimalDetail';
import AccountCreation from '@/components/account/creation/AccountCreation';
import UnderConstruction from '@/components/other/UnderConstruction';

const routes = [
  {
    path: '/',
    name: 'Animals',
    component: Animals,
  },
  {
    path: '/animals/:id',
    name: 'AnimalDetail',
    component: AnimalDetail,
    props: true,
  },
  {
    path: '/register',
    name: 'AccountCreation',
    component: AccountCreation,
  },
  {
    path: '/under_construction',
    name: 'UnderConstruction',
    component: UnderConstruction,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
