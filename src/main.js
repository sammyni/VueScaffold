/*jshint esversion: 9*/

import Vue from "vue";
import Notifications from "vue-notification";
import VueRouter from "vue-router";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(Notifications);
Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
