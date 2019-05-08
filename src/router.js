import Vue from "vue";
import Router from "vue-router";
import Home from "./components/home";
import BasicScene from "./components/scenes/basic-scene.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/basic-scene",
      name: "basic-scene",
      component: BasicScene
    }
  ]
});
