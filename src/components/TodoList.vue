<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <TodoItem :todo="todo" />
    </li>
  </ul>
</template>
<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  }
};
</script>
