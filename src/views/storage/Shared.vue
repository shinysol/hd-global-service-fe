<template>
  <StorageExplorer path="공유 폴더/" :fileList="myList" />
</template>
<script setup lang="ts">
import StorageExplorer from "./StorageExplorer.vue";
import { useAxios } from "../../controllers/api/useAxios";
import { onMounted, ref } from "vue";
const axios = useAxios();
const myList = ref({});
onMounted(async () => {
  try {
    const response = await axios.get("/file/shared");
    myList.value = response.data.json;
  } catch (error) {
    console.error("Error fetching file list:", error);
  }
});
</script>
