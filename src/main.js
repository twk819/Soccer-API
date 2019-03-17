import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import helper from "./plugins/helper";

Vue.config.productionTip = false;

Vue.use(helper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
