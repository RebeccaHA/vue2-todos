import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import Home from "./components/Home";

const app = new Vue({
  render: h => h(App)
}).$mount("#app");

app.use(navigation);

const navigation = new Router({ routes });

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
];
