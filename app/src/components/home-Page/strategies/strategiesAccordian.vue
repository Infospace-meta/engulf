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
          `bg-white`,
          'h-2/6',
          'w-4/6',
          'z-0',
          'rounded-t-xl',
          'shadow-xl',
          `border-t border-l border-r border-${color.code}-200`,
          { 'translate-y-20': isTranslated[index] },
        ]"
      >
        <p class="flex justify-center translate-y-10">{{ color.name }}</p>
      </div>
      <div
        :class="[
          color.background,
          'h-4/6',
          'w-5/6',
          'z-20',
          'rounded-xl',
          'border-l-[100px]',
          'border-l-transparent',
          'border-t-[20px]',
          `border-t-white`,
          'border-r-[100px]',
          'border-r-transparent',
        ]"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Initialize colors as an array
const colors = ref([
  { code: "green", background: "bg-green-500", name: "Green" },
  { code: "red", background: "bg-red-500", name: "Red" },
  { code: "purple", background: "bg-pink-500", name: "Blue" },
  { code: "orange", background: "bg-orange-500", name: "Yellow" },
  {
    code: "red",
    background: "bg-pink-600",
    name: "Purple",
  },
  { code: "green", background: "bg-blue-500", name: "Orange" },
  { code: "red", background: "bg-cyan-700", name: "Red" },
  { code: "purple", background: "bg-black", name: "Blue" },
]);

const isTranslated = ref(colors.value.map(() => true)); // Use colors.value to access the array

const removeTranslate = (index) => {
  isTranslated.value[index] = false;
};

const addTranslate = (index) => {
  isTranslated.value[index] = true;
};
</script>
