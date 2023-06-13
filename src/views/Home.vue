<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>
<template>
  <div class="flex flex-col justify-center items-center h-full gap-3">
    <div>홈화면</div>
    <div>대시보드 등</div>
  </div>
</template>
