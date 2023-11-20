<template>
  <div
    class="flex flex-wrap justify-center gap-10 lg:px-96 lg:max-w-screen-7xl mx-auto py-10 bg-gradient-to-bl from-green-400 from-2% via-green-100 via-30% to-white to-90% pattern-houndstooth-green-50/100"
  >
    <div
      v-for="(color, index) in colors"
      :key="index"
      class="w-64 h-80 flex flex-col items-center justify-center"
      @mouseover="removeTranslate(index)"
      @mouseout="addTranslate(index)"
    >
      <div
        :class="[
          `bg-${color}-50`,
          'h-2/6',
          'w-4/6',
          'z-0',
          'rounded-t-xl',
          'shadow-xl',
          `border-t border-l border-r border-${color}-200`,
          { 'translate-y-20': isTranslated[index] },
        ]"
      ></div>
      <div
        :class="[
          `bg-${color}-500`,
          'h-4/6',
          'w-5/6',
          'z-20',
          'rounded-xl',
          'border-l-[100px]',
          'border-l-transparent',
          'border-t-[20px]',
          `border-t-${color}-50`,
          'border-r-[100px]',
          'border-r-transparent',
        ]"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const colors = ["red", "green", "yellow", "purple", "orange", "green"];
const isTranslated = ref(colors.map(() => true));

const removeTranslate = (index) => {
  isTranslated.value[index] = false;
};

const addTranslate = (index) => {
  isTranslated.value[index] = true;
};
</script>
