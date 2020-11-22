<template>
  <div>
    <NavBar />
    <router-view></router-view>
    <TodoList :todos="todos" />
    <TodoForm />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoForm from "./components/TodoForm.vue";
import NavBar from "./components/NavBar.vue";
import { store } from "./store";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    TodoList,
    TodoForm,
    NavBar
  },
  store,

  computed: mapState("store", ["todos"])
};
</script>
