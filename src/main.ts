import Vue from "vue";
import { Route } from "vue-router";
import "./plugins/axios";
import Axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// jQueryは必要になる場合があるため、グローバル領域でimport
import "jquery";

/**
 * quasarモジュールをグローバル領域でimport
 */
import "./styles/quasar.styl";
import "quasar-framework/dist/quasar.ie.polyfills";
import iconSet from "quasar-framework/icons/fontawesome";
import lang from "quasar-framework/i18n/ja";
import "quasar-extras/animate";
import "quasar-extras/roboto-font";
import "quasar-extras/material-icons";
import "quasar-extras/fontawesome";
import Quasar from "quasar";
Vue.use(Quasar, {
  config: {},
  i18n: lang,
  iconSet: iconSet
});

/**
 * 画面遷移前のルーターによるフック
 * ログイン認証前はログイン画面へ遷移するようにルーターでフックする
 * router.tsの各ルーティング情報のmetaプロパティに「isPublic=true」がないものはログイン済みかチェックする
 */
router.beforeEach((to: Route, from: Route, next: any) => {
  if (
    to.matched.some(record => !record.meta.isPublic) &&
    !store.state.loggedIn
  ) {
    next({
      path: "/",
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
});

/**
 * Vue インスタンスの作成
 */
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
