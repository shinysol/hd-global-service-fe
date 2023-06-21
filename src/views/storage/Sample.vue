<template>
  <StorageExplorer path="샘플 폴더/" :fileList="myList" />
</template>
<script setup lang="ts">
import StorageExplorer from "./StorageExplorer.vue";
const myList = [
  {
    type: "file",
    name: "내파일1.pdf",
    createdAt: new Date(2023, 0, 19, 15, 12),
    size: 423113,
  },
  {
    type: "file",
    name: "내파일2.pdf",
    createdAt: new Date(2023, 0, 19, 14, 11),
    size: 80251,
  },
  {
    type: "file",
    name: "내파일3.pdf",
    createdAt: new Date(2023, 0, 20, 9, 12),
    size: 125122,
  },
  {
    type: "folder",
    name: "FOLDER2",
  },
  {
    type: "folder",
    name: "FOLDER3",
  },
  {
    type: "file",
    name: "파일명.doc",
    createdAt: new Date(2023, 0, 20, 15),
    size: 15622,
  },
];
</script>
