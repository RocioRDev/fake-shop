import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/ProductsView.vue"),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token")) {
        next();
      } else {
        next("/login");
      }
    },
  },
  // {
  //   path: "/profile",
  //   name: "profile",
  //   component: () =>
  //     import(/* webpackChunkName: "profile" */ "../views/UserProfileView.vue"),
  //   beforeEnter: (to, from, next) => {
  //     if (localStorage.getItem("token")) {
  //       next();
  //     } else {
  //       next("/login");
  //     }
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
