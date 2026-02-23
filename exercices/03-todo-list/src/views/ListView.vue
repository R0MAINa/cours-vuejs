<script setup lang="js">
import { ref } from 'vue'
import TodoList from '@/components/todo/TodoList.vue'

const todos = ref([
  { id: 1, title: 'Apprendre le VueJS', status: 'In progress' },
  { id: 2, title: 'Apprendre le ReactJS', status: 'Todo' },
  { id: 3, title: "Apprendre l'Angular", status: "Won't do" },
  { id: 4, title: 'Devenir le maître du monde', status: 'Done' },
])
</script>

<template>
  <h2>List</h2>

  <TodoList :todos="todos" />
</template>
