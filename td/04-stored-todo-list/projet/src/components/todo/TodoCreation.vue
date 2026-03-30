<script setup>
import DesignedButton from '@/components/DesignedButton.vue'
import {ref} from 'vue'

const emits = defineEmits(['creation']);

const title = ref('');
const description = ref('');
const tags = ref('');
const status = ref('Todo');

function sendTodoEvent(_) {
  const splittedTags = tags.value.split(', '); // 'tag, other, ..' => ['tag', 'other', ...]
  const todo = {
    title: title.value,
    description: description.value,
    status: status.value,
    tags: splittedTags,
  }
  emits('creation', todo)
}
</script>

<template>
  <h2>Créer une tâche</h2>
  <form @submit.prevent="sendTodoEvent">
    <label>Titre <input v-model="title" name="title"/></label>
    <label>Description <input v-model="description" name="description"/></label>

    <label>Status
      <select v-model="status">
        <option>Todo</option>
        <option>In progress</option>
        <option>Done</option>
        <option>Won't do</option>
      </select>
    </label>

    <label>Tags <input v-model="tags" name="tags" type="text"/></label>

    <DesignedButton type="submit">Créer</DesignedButton>
  </form>
</template>

<style lang="css" scoped>
h2 {
  border-top: 1px solid lightgray;
  padding: 30px 0;
  margin-top: 20px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 20%;
}

label {
  display: flex;
  justify-content: space-between;
}
</style>
