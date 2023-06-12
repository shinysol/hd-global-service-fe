<template>
  <div class="bg-red-200 w-full h-36 rounded-xl p-4">
    <div class="flex flex-col" v-if="item?.type === 'file'">
      <div>
        {{ item?.name }}
      </div>
      <div>
        {{ dayjs(item?.createdAt).format("YYYY/MM/DD HH:mm") }}
      </div>
      <div>
        {{ formatBytes(item?.size) }}
      </div>
    </div>
    <div class="flex justify-center items-center h-full w-full" v-else>
      <div>
        {{ item?.name }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import dayjs from "dayjs";
import { formatBytes } from "../../../utils/conversion/formatByte";
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
