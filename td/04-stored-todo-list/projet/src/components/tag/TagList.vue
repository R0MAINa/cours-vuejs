<script lang="js" setup>
import TagItem from './TagItem.vue';

defineProps(['tags']);
</script>

<template>
<ul class="tags">
    <TagItem v-for="tag in tags" :key="`tag-${tag}`" class="tag">{{ tag }}</TagItem>
</ul>
</template>

<style lang="css" scoped>
.tags {
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;

  flex-grow: 1;
}
</style>
