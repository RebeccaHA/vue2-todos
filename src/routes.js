import VueRouter from "vue-router";
import Home from "./components/Home";
import Vue from "vue";

Vue.use(VueRouter);

export const router = new VueRouter({ routes });

const routes = [
  {
    path: "/home",
    component: Home
  }
];
