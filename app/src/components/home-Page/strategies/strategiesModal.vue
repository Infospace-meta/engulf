<template>
  <div class="fixed inset-0 flex items-center justify-center">
    <div class="bg-white p-4 rounded-md w-1/2">
      <div class="grid grid-cols-2 gap-3">
        <div class="flex justify-between borderborder-cyan-600 rounded-xl p-2">
          <h1 class="text-lg">
            {{ modal.name }}
          </h1>
          <img src="src/assets/images/info.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  modal: Object,
});
</script>
