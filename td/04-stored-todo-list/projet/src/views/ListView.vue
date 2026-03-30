<script lang="js" setup>
import importedTodos from '@/assets/todos.js'
import TodoCreation from '@/components/todo/TodoCreation.vue'
import TodoList from '@/components/todo/TodoList.vue'
import { ref } from 'vue'

const todos = ref(importedTodos);

function handleCreation(todo) {
  todo.id = todos.value.length + 1;
  todos.value.push(todo);
}
</script>

<template>
  <div class="list-view">
    <h2>List</h2>
    <TodoList :todos="todos" />
    <TodoCreation @creation="handleCreation" />
  </div>
</template>

<style lang="css" scoped>
.list-view {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

h2 {
  font-size: 1.5em;
}
</style>
