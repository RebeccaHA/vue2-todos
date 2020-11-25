import VueRouter from "vue-router";
import Home from "./pages/Home";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home"
  }
];
export const router = new VueRouter({ routes });
