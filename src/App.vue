<script setup lang="ts">
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
</script>

<template>
  <main class="flex flex-col">
    <Header />
    <div class="flex-1 flex flex-col">
      <div class="flex-1">
        <RouterView />
      </div>
      <Footer />
    </div>
  </main>
</template>
