<template>
  <div class="flex gap-2 items-center [&>a:not(:hover)]:text-white">
    <!-- 버튼 영역-->
    <!-- <a href="/storage">템플릿</a> -->
    <a href="/storage/sample">스토리지샘플</a>
    <a href="/logout" v-if="isLoggedIn">로그아웃</a>
    <a href="/login" v-else>로그인</a>
  </div>
</template>
<script setup lang="ts">
import { getUserInfo } from "../../states/localStorage/userLoginStore";
const isLoggedIn = !!getUserInfo().userId;
</script>
