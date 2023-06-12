<template>
  <div class="flex">
    <button>비우기</button>
    <button>선택삭제</button>
  </div>
  <StorageExplorer path="휴지통/" />
</template>
<script setup lang="ts">
import StorageExplorer from "./StorageExplorer.vue";
</script>
