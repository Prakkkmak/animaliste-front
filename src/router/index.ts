import { createWebHistory, createRouter } from "vue-router";
import Animals from "@/components/animal/Animals.vue";
import AnimalDetail from "@/components/animal/detail/AnimalDetail.vue";
import AccountCreation from "@/components/user/Register.vue";
import UnderConstruction from "@/components/other/UnderConstruction.vue";
import AccountLogin from "@/components/user/Login.vue";

const routes = [
  {
    path: "/",
    name: "Animals",
    component: Animals,
  },
  {
    path: "/animals/:id",
    name: "AnimalDetail",
    component: AnimalDetail,
    props: true,
  },
  {
    path: "/register",
    name: "AccountCreation",
    component: AccountCreation,
  },
  {
    path: "/login",
    name: "AccountLogin",
    component: AccountLogin,
  },
  {
    path: "/under_construction",
    name: "UnderConstruction",
    component: UnderConstruction,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
