<template>
  <div class="flex">
    <button @click="showAlert">비우기</button>
    <button @click="showAlert">선택삭제</button>
  </div>
  <StorageExplorer path="휴지통/" :fileList="myList" />
</template>
<script setup lang="ts">
import StorageExplorer from "./StorageExplorer.vue";
import { useAxios } from "../../controllers/api/useAxios";
import { onMounted, ref } from "vue";
const axios = useAxios();
const myList = ref({});
const showAlert = () => {
  alert("아직 구현되지 않았습니다.");
};
onMounted(async () => {
  try {
    const response = await axios.get("/file/trash");
    myList.value = response.data.json;
  } catch (error) {
    console.error("Error fetching file list:", error);
  }
});
</script>
