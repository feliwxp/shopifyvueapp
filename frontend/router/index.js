import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import { History } from "@shopify/app-bridge/actions";
// import { appBridge } from "../helpers/appBridge";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
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
  ],
});

// router.afterEach((to) => {
//   const history = History.create(appBridge);
//   history.dispatch(History.Action.PUSH, to.fullPath);
// });

// const history = History.create(appBridge);
// history.subscribe(History.Action.POP, () => {
//   router.go(-1);
// });

export default router;
