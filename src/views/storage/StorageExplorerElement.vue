<template>
  <div class="shadow-md w-full h-36 rounded-xl p-4">
    <div class="h-full flex flex-col" v-if="item?.type === 'file'">
      <div class="flex-1 flex gap-3 items-start">
        <div class="flex-1 flex gap-3 items-center">
          <input type="checkbox" />
          <div>
            {{ item?.name }}
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="text-xs text-gray-400">
          {{ formatBytes(item?.size) }}
        </div>
        <div class="text-xs text-gray-400">
          {{ dayjs(item?.createdAt).format("YYYY/MM/DD HH:mm") }}
        </div>
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
