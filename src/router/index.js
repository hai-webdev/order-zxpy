import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Case from "../views/Case";
import CaseList from "../views/Case/CaseList";
import Contact from "../views/Contact";

import titleController from "../utils/titleController";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "首頁",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "關於我們",
    },
  },
  {
    path: "/case",
    name: "Case",
    component: Case,
    meta: {
      title: "全港案例",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "聯絡報價",
    },
  },
  {
    path: "/case/:id",
    name: "CaseList",
    component: CaseList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach(async (to) => {
  await store.dispatch("site/getData");
  titleController.setSiteTitle(store.state.site.data.title);
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title);
  }
});

export default router;
