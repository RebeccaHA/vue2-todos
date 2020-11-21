<template>
  <div>
    <NavBar />
    <router-view></router-view>
    <TodoList :todos="todos" />
    <TodoForm @todo-item="addTodo" />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoForm from "./components/TodoForm.vue";
import NavBar from "./components/NavBar.vue";
import { store } from "./store";

export default {
  name: "App",
  components: {
    TodoList,
    TodoForm,
    NavBar
  },
  data() {
    return {
      todos: []
    };
  },
  store,
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
      console.log("adding", todo);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
