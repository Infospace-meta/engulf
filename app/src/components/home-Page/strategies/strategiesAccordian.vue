<template>
  <div
    class="flex flex-wrap justify-center gap-10 lg:px-96 lg:max-w-screen-7xl mx-auto py-10 bg-gradient-to-bl from-green-400 from-2% via-green-100 via-30% to-white to-90% pattern-houndstooth-green-50/100"
  >
    <div
      v-for="(color, index) in colors"
      :key="index"
      class="w-56 h-80 flex flex-col items-center justify-center"
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
        <p
          class="flex justify-center translate-y-10 font-semibold text-xl p-4 text-center"
          :style="{ color: color.background }"
        >
          {{ color.name }}
        </p>
      </div>
      <div
        :class="[
          color.background,
          'h-4/6',
          'w-4/6',
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
  {
    code: "blue",
    background: "bg-sky-500",
    name: "telegram members",
  },
  {
    code: "green",
    background: "bg-green-600",
    name: "whatsapp followers",
  },
  {
    code: "gray",
    background: "bg-black",
    name: "x.com followers",
  },
  {
    code: "blue",
    background: "bg-blue-500",
    name: "facebook followers",
  },
  {
    code: "red",
    background: "bg-red-500",
    name: "youtube subscribers",
  },

  {
    code: "purple",
    background: "bg-violet-500",
    name: "instagram followers",
  },
  {
    code: "cyan",
    background: "bg-cyan-600",
    name: "Paid clients",
  },

  {
    code: "orange",
    background: "bg-orange-500",
    name: "total followers",
  },
]);

const isTranslated = ref(colors.value.map(() => true)); // Use colors.value to access the array

const removeTranslate = (index) => {
  isTranslated.value[index] = false;
};

const addTranslate = (index) => {
  isTranslated.value[index] = true;
};
</script>
