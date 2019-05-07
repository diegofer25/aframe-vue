import Vue from "vue";
import Router from "vue-router";
import MainScene from "./components/main-scene.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main-scene",
      component: MainScene
    }
  ]
});
