import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
      console.log("adding", state.todos);
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("ADD_TODO", todo);
    }
  }
});
