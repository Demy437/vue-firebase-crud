import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/metingen",
      name: "metingen",
      component: () => import("./components/MetingenList")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddMeting")
    }
  ]
});
