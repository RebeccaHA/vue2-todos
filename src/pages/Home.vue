<template>
  <div>
    <h1>Your home is here</h1>
    <TodoList :todos="todos" />
    <TodoForm />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import TodoForm from "@/components/TodoForm.vue";

export default {
  name: "Home",
  components: {
    TodoList,
    TodoForm
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  }
};
</script>
