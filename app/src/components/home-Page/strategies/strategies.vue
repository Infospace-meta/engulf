<template>
  <div
    class="flex flex-wrap justify-center gap-10 lg:px-96 lg:max-w-screen-7xl mx-auto py-10 bg-gradient-to-bl from-green-400 from-2% via-green-100 via-30% to-white to-90% pattern-houndstooth-green-50/100"
  >
    <div class="w-64 h-80 flex flex-col items-center justify-center">
      <div
        class="bg-red-50 h-2/6 w-4/6 z-0 rounded-t-xl shadow-xl border-t border-l border-r border-red-200"
        :class="{ 'translate-y-20': isTranslated }"
      ></div>
      <div
        class="bg-red-900 h-4/6 w-5/6 z-10 rounded-xl shadow-xl border-l-[100px] border-l-transparent border-t-[20px] border-t-red-50 border-r-[100px] border-r-transparent"
      ></div>
    </div>
    <div class="w-64 h-80 flex flex-col items-center justify-center">
      <div
        class="bg-green-50 h-2/6 w-4/6 z-0 rounded-t-xl shadow-xl border-t border-l border-r border-green-200"
        :class="{ 'translate-y-20': isTranslated }"
      ></div>
      <div
        class="bg-green-800 h-4/6 w-5/6 z-10 rounded-xl border-l-[100px] border-l-transparent border-t-[20px] border-t-green-50 border-r-[100px] border-r-transparent"
      ></div>
    </div>
    <div class="w-64 h-80 flex flex-col items-center justify-center">
      <div
        class="bg-blue-50 h-2/6 w-4/6 z-0 rounded-t-xl shadow-xl border-t border-l border-r border-blue-200"
        :class="{ 'translate-y-20': isTranslated }"
      ></div>
      <div
        class="bg-blue-900 h-4/6 w-5/6 z-10 rounded-xl shadow-xl border-l-[100px] border-l-transparent border-t-[20px] border-t-blue-50 border-r-[100px] border-r-transparent"
      ></div>
    </div>
    <div class="w-64 h-80 flex flex-col items-center justify-center">
      <div
        class="bg-yellow-50 h-2/6 w-4/6 z-0 rounded-t-xl shadow-xl border-t border-l border-r border-yellow-200"
        :class="{ 'translate-y-20': isTranslated }"
      ></div>
      <div
        class="bg-yellow-500 h-4/6 w-5/6 z-10 rounded-xl shadow-xl border-l-[100px] border-l-transparent border-t-[20px] border-t-yellow-50 border-r-[100px] border-r-transparent"
      ></div>
    </div>
    <div class="w-64 h-80 flex flex-col items-center justify-center">
      <div
        class="bg-purple-50 h-2/6 w-4/6 z-0 rounded-t-xl shadow-xl border-t border-l border-r border-purple-200"
        :class="{ 'translate-y-20': isTranslated }"
      ></div>
      <div
        class="bg-purple-800 h-4/6 w-5/6 z-10 rounded-xl shadow-xl border-l-[100px] border-l-transparent border-t-[20px] border-t-purple-50 border-r-[100px] border-r-transparent"
      ></div>
    </div>
    <div
      class="w-64 h-80 flex flex-col items-center justify-center"
      @mouseover="removeTranslate"
      @mouseout="addTranslate"
    >
      <div
        class="bg-orange-50 h-2/6 w-4/6 z-0 rounded-t-xl shadow-xl border-t border-l border-r border-orange-200"
        :class="{ 'translate-y-20': isTranslated }"
      ></div>
      <div
        class="bg-orange-700 h-4/6 w-5/6 z-10 rounded-xl shadow-xl border-l-[100px] border-l-transparent border-t-[20px] border-t-orange-50 border-r-[100px] border-r-transparent"
      ></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const isTranslated = ref(true);

const removeTranslate = () => {
  isTranslated.value = false;
};

const addTranslate = () => {
  isTranslated.value = true;
};
</script>
