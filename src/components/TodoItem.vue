<template>
  <div>
    <h2>{{todo.title}}</h2>
    <p>{{todo.description}}</p>
    <p>{{todo.name}}</p>
    <p>{{todo.importance}}</p>
  </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>
