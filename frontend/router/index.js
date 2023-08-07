import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/browse",
      name: "browse",
      component: () => import("../views/BrowseView.vue"),
    },
    {
      path: "/campaigns",
      name: "campaigns",
      component: () => import("../views/CampaignsView.vue"),
    },
    {
      path: "/account",
      name: "account",
      component: () => import("../views/AccountView.vue"),
    },
    {
      path: "/charities/:id",
      component: () => import("../views/CharityDetail.vue"),
    },
    {
      path: "/create-campaign",
      component: () => import("../views/CreateCampaign.vue"),
    },
    {
      path: "/test",
      component: () => import("../views/test.vue"),
    },
  ],
});

export default router;
