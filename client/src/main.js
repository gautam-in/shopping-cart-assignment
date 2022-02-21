import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
import "../src/assets/scss/main.scss";
import store from './store'

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
