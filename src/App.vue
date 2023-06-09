<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <main class="flex flex-col">
    <header
      class="w-full p-2 flex justify-between items-center h-20 bg-blue-700"
    >
      <div class="text-white">프로젝트 명</div>
      <div class="flex gap-2 items-center [&>a:not(:hover)]:text-white">
        <!-- 버튼 영역-->
        <a>내 폴더</a>
        <a>공용 폴더</a>
        <a>휴지통</a>
        <a>로그아웃</a>
        <button>FOLDER</button>
        <button>Upload</button>
      </div>
    </header>
    <div class="flex-1 flex flex-col">
      <div class="flex-1">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
        <HelloWorld msg="Vite + Vue" />
      </div>
      <footer
        class="w-full p-2 h-20 bg-green-200 flex justify-between items-center"
      >
        푸터푸터
        <div class="flex items-center">Terms Of Use | Privacy Policy</div>
      </footer>
    </div>
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
