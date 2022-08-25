import { createRouter, createWebHistory } from "vue-router";

export const history = createWebHistory();
export const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: () => import("./components/Home.vue"),
    },
    {
      path: "/auth-redirect",
      component: () => import("./components/AuthRedirect.vue"),
    },
  ],
});
