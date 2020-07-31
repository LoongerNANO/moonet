import Vue from "vue";
import ViewUI from "view-design";
import { router } from "./router/index";
import store from "./store";
import App from "./app.vue";
import "view-design/dist/styles/iview.css";
import VueI18n from "vue-i18n";
import "font-awesome/css/font-awesome.min.css";

Vue.use(VueI18n);
Vue.use(ViewUI);

const root = new Vue({
  el: "#app",
  router: router,
  store: store,
  render: (h) => h(App),
  data: {},
  mounted() {},
  created() {},
});
export default root;
