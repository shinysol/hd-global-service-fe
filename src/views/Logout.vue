<template></template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { logOut } from "../states/localStorage/userLoginStore";
logOut();
const router = useRouter();
router.push("/login");
</script>
