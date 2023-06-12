<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>
<template>
  <div class="flex justify-center items-center h-full">스토리지</div>
</template>
