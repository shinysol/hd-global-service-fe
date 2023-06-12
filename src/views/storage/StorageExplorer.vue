<template>
  <div class="max-w-screen-xl mx-auto flex flex-col">
    <div class="px-4 py-8">{{ path || "템플릿" }}</div>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-8">
      <template v-for="element in fileList">
        <StorageExplorerElement :item="element" />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import StorageExplorerElement from "./StorageExplorerElement.vue";
import { fileList } from "../../assets/dummies/dummyFileList";
defineProps({
  path: {
    type: String,
    required: true,
  },
});
</script>
