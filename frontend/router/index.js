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
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/exitiframe",
      name: "exitiframe",
      component: () => import("../views/ExitIframeView.vue"),
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
