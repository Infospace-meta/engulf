<template>
  <div
    class="flex flex-wrap justify-center gap-10 lg:px-96 lg:max-w-screen-7xl mx-auto py-10 bg-gradient pattern-texture-green-200/100"
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
          class="flex justify-center translate-y-6 font-semibold text-xl p-4 text-center"
          :style="{ color: color.background }"
        >
          {{ color.name }}
        </p>
      </div>
      <div
        class="z-40 translate-y-14 absolute flex flex-col items-center justify-center"
      >
        <img :src="color.img" />
        <p class="text-white font-semibold text-2xl py-4">{{ color.count }}</p>
      </div>
      <div
        class="flex flex-col justify-center items-center"
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
    count: "500",
    img: "src/assets/images/telegram.png",
  },
  {
    code: "green",
    background: "bg-[#25D366]",
    name: "whatsapp followers",
    count: "500",
    img: "src/assets/images/whatsapp.png",
  },
  {
    code: "gray",
    background: "bg-black",
    name: "x.com followers",
    count: "500",
    img: "src/assets/images/twitterx.png",
  },
  {
    code: "blue",
    background: "bg-blue-500",
    name: "facebook followers",
    count: "500",
    img: "src/assets/images/facebook.png",
  },
  {
    code: "red",
    background: "bg-red-500",
    name: "youtube subscribers",
    count: "500",
    img: "src/assets/images/youtube.png",
  },

  {
    code: "purple",
    background: "bg-[#833AB4]",
    name: "instagram followers",
    count: "500",
    img: "src/assets/images/instagram.png",
  },
  {
    code: "cyan",
    background: "bg-cyan-600",
    name: "Paid clients",
    count: "500",
    img: "src/assets/images/clients.png",
  },

  {
    code: "orange",
    background: "bg-orange-500",
    name: "total followers",
    count: "500",
    img: "src/assets/images/followers.png",
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

<style>
.bg-gradient {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 255, 255, 0.8) 10%,
    rgba(0, 255, 255, 1) 20%,
    rgba(0, 200, 255, 1) 30%,
    rgba(0, 150, 255, 1) 50%,
    rgba(0, 200, 255, 1) 75%,
    rgba(0, 255, 255, 1) 85%,
    rgba(0, 255, 255, 0.8) 90%,
    rgba(255, 255, 255, 1) 100%
  );
}
</style>
