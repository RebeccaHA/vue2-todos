import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const vuestore = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {}
});
