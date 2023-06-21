<template>
  <label
    class="rounded-lg px-6 py-2.5 bg-gray-50 cursor-pointer"
    for="file-upload"
    >UPLOAD</label
  >
  <input
    class="hidden"
    id="file-upload"
    type="file"
    accept=".*"
    @change="handleFileUpload"
  />
</template>
<script setup lang="ts">
import { useAxios } from "../../controllers/api/useAxios";
const handleFileUpload = async (event: any) => {
  const formData = new FormData();
  formData.append("file", event.target.files[0]);
  const axios = useAxios();
  try {
    await axios.post("/api/upload", formData);
    // File uploaded successfully
  } catch (error) {
    // Handle error
  }
};
</script>
