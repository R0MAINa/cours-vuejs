<script lang="js" setup>
import TodoCreation from "@/components/todo/TodoCreation.vue";
</script>

<template>
  <div class="create-view">
    <TodoCreation />
  </div>
</template>

<style lang="css" scoped>
.create-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 20px;
}

.form-group {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.form-group label::after {
  content: ':';
}

button {
  margin-top: 10px;
  width: fit-content;
  padding: 5px 10px;
  align-self: flex-end;
}
</style>
