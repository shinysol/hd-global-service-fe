<template>
  <div class="flex gap-2 items-center [&>a:not(:hover)]:text-white">
    <!-- 버튼 영역-->
    <!-- <a href="/storage">템플릿</a> -->
    <a href="/storage/my">내 폴더</a>
    <a href="/storage/shared">공용 폴더</a>
    <a href="/storage/recycles">휴지통</a>
    <a href="/logout" v-if="isLoggedIn">로그아웃</a>
    <a href="/login" v-else>로그인</a>

    <button>FOLDER</button>
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
  </div>
</template>
<script setup lang="ts">
import { useAxios } from "../../controllers/api/useAxios";
import { getUserInfo } from "../../states/localStorage/userLoginStore";
const isLoggedIn = !!getUserInfo().userId;
const axios = useAxios();
const handleFileUpload = async (event: any) => {
  const formData = new FormData();
  formData.append("file", event.target.files[0]);

  try {
    await axios.post("/api/upload", formData);
    // File uploaded successfully
  } catch (error) {
    // Handle error
  }
};
</script>
