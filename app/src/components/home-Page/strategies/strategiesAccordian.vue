<template>
  <!--
      v-for="index in items.length"
      :key="index"
      -->
  <div class="p-24 flex flex-wrap items-center justify-center">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="[
        'flex-shrink-0 m-6 relative overflow-hidden',
        items[index].bgClass,
      ]"
      @mouseover="showHiddenElement(index)"
      @mouseout="hideElement(index)"
    >
      <svg
        class="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
        style="transform: scale(1.5); opacity: 0.1"
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div
        class="relative pt-10 px-10 flex items-center justify-center"
        :class="{ hidden: items[index].isHidden }"
      >
        <div
          class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style="
            background: radial-gradient(black, transparent 60%);
            transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1);
            opacity: 0.2;
          "
        ></div>
        <img class="relative w-40" :src="items[index].imageSrc" alt="" />
      </div>
      <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1">{{ items[index].category }}</span>
        <div class="flex justify-between">
          <span class="block font-semibold text-xl">{{
            items[index].name
          }}</span>
          <span
            :class="['block bg-white rounded-full', items[index].textClass]"
            :text="items[index].price"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    bgClass: "bg-green-500",
    isHidden: true,
    imageSrc:
      "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    category: "Indoor",
    name: "Peace Lily",
    textClass: "text-green-500",
    price: "$36.00",
  },
  {
    bgClass: "bg-orange-500",
    isHidden: true,
    imageSrc:
      "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    category: "Indoor",
    name: "Peace Lily",
    textClass: "text-orange-500",
    price: "$36.00",
  },
  {
    bgClass: "bg-purple-500",
    isHidden: true,
    imageSrc:
      "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    category: "Indoor",
    name: "Peace Lily",
    textClass: "text-purple-500",
    price: "$36.00",
  },
  // Add more items as needed
]);

const showHiddenElement = (index) => {
  items.value[index].isHidden = false;
};

const hideElement = (index) => {
  items.value[index].isHidden = true;
};
</script>

<style scoped>
/* Add any custom styles for your component here */
</style>
