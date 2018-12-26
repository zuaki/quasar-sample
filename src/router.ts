import Vue from "vue";
import Router from "vue-router";
import Url from "@/constants/Url";

import Login from "@/views/Login.vue";
import DefaultLayout from "@/layouts/Default.vue";
import Top from "@/views/Top.vue";
import User from "@/views/UserSetting.vue";
import WorkTimeInput from "@/views/WorkTimeInput.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: Url.root,
      name: "login",
      component: Login,
      meta: { isPublic: true }
    },
    {
      path: Url.dashboard,
      component: DefaultLayout,
      children: [
        {
          path: Url.top,
          name: "top",
          component: Top
        },
        {
          path: Url.user,
          name: "user",
          component: User
        },
        {
          path: Url.worktime,
          name: "worktime",
          component: WorkTimeInput
        }
      ]
    }
  ]
});
