<template>
  <div class="px-5 lg:px-96 max-lg:hidden h-screen">
    <h1
      class="text-5xl font-semibold text-slate-500 flex items-center justify-center py-10 my-10 border rounded-lg shadow-2xl"
    >
      Tracksheet & Strategies
    </h1>
    <div class="grid lg:grid-cols-4 gap-5">
      <div
        @click="selectCategory(catIndex)"
        v-for="(cat, catIndex) in category"
        :key="catIndex"
      >
        <h1
          :class="[
            cat.color,
            {
              'border-3': currentCategoryIndex === catIndex,
              border: currentCategoryIndex !== catIndex,
            },
          ]"
          :style="
            currentCategoryIndex === catIndex
              ? 'border-color: white; border-weight:5px;'
              : ''
          "
          class="rounded-3xl shadow-xl border-2 border-gray-400 text-white font-bold text-3xl p-10 flex flex-wrap relative"
        >
          {{ cat.name }}
          <div
            v-if="currentCategoryIndex === catIndex"
            class="absolute w-0 h-0 border-solid border-t-4 border-transparent border-white bottom-0 left-1/2 transform -translate-x-1/2"
          ></div>
        </h1>
      </div>
    </div>
    <div class="rounded-lg shadow-2xl border-2 mt-5 p-10 relative">
      <h1 class="text-2xl text-center py-4">
        {{ category[currentCategoryIndex].name }}
      </h1>
      <div class="grid lg:grid-cols-3 gap-3">
        <div v-for="(track, trackIndex) in displayedTracks" :key="trackIndex">
          <div
            class="flex justify-between border border-cyan-600 rounded-xl p-2 hover:text-purple-600"
          >
            <h1 class="text-lg font-bold text-slate-600 hover:text-purple-600">
              {{ track.name.toUpperCase() }}
            </h1>
            <img src="src/assets/images/next.png" />
          </div>
        </div>
      </div>
      <!-- Indicator for active category -->
      <div
        class="absolute top-0 left-0 h-1 bg-yellow-400"
        :style="{
          width: 100 / category.length + '%',
          left: (currentCategoryIndex * 100) / category.length + '%',
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const category = ref([
  { name: "Trading Strategies", color: "bg-gradient-to-r from-cyan-500 to-blue-500" },
  { name: "Signals services", color: "bg-gradient-to-r from-red-500 to-orange-500" },
  { name: "Live Streamings", color: "bg-gradient-to-r from-green-500 to-yellow-500" },
  { name: "Live streamings", color: "bg-gradient-to-r from-purple-500 to-indigo-500" },
]);

const tracks = ref([
  { name: "Trend-trading", category: 0 },
  { name: "6 pair hedge", category: 0 },
  { name: "level trading", category: 0 },
  { name: "martingle & griding", category: 0 },
  { name: "miscellaneous/swing", category: 0 },
  { name: "paid client screenshot", category: 1 },
  { name: "investor accounts", category: 1 },
  { name: "hesdge signals - excel", category: 1 },
  { name: "hedge signals - web", category: 1 },
  { name: "xauud - performance ", category: 1 },
  { name: "Shop 3", category: 2 },
  { name: "Shop 4", category: 2 },
  { name: "Shop 5", category: 2 },
  { name: "Shop 6", category: 2 },
  { name: "Shop 3", category: 2 },
  { name: "tab format", category: 1 },
  { name: "web format", category: 3 },
  { name: "Copy trade performance", category: 3 },
]);

let currentCategoryIndex = ref(0); // Initialize with the first category

const selectCategory = (categoryIndex) => {
  currentCategoryIndex.value = categoryIndex;
};

const displayedTracks = computed(() => {
  return tracks.value.filter(
    (track) => track.category === currentCategoryIndex.value
  );
});

onMounted(() => {
  // Initialize the shops to display for the first category when the component is mounted
  // You can add more initialization logic here if needed
  const initialCategory = category[0];
  if (initialCategory) {
    currentCategoryIndex.value = category.indexOf(initialCategory);
  }
});
</script>
