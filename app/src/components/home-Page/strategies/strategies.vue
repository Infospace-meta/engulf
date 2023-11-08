<template>
  <div class="px-5 lg:px-96 lg:hidden">
    <h1
      class="text-2xl font-semibold text-slate-500 flex items-center justify-center py-10 my-10 border rounded-lg shadow-2xl"
    >
      Tracksheet & Strategies
    </h1>
    <div class="grid lg:grid-cols-4 gap-5 sm:grid-cols-1 md:max-lg:grid-cols-2">
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
            currentCategoryIndex === catIndex ? 'border-color: white;' : ''
          "
          class="rounded-xl text-white text-3xl p-10 flex flex-wrap relative"
        >
          {{ cat.name }}
          <div
            v-if="currentCategoryIndex === catIndex"
            class="absolute w-0 h-0 border-solid border-t-4 border-transparent border-white bottom-0 left-1/2 transform -translate-x-1/2"
          ></div>
        </h1>
        <div
          v-if="currentCategoryIndex === catIndex"
          class="grid lg:grid-cols-2 gap-3 sm:grid-cols-1 pt-5"
        >
          <div v-for="(track, trackIndex) in displayedTracks" :key="trackIndex">
            <div
              class="flex justify-between border border-cyan-600 rounded-xl p-2"
            >
              <h1 class="text-lg">{{ track.name }}</h1>
              <img src="src/assets/images/info.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const category = ref([
  { name: "Strategy", color: "bg-red-500" },
  { name: "Signals services", color: "bg-indigo-500" },
  { name: "Live Streamings", color: "bg-green-500" },
  { name: "Live streamings", color: "bg-blue-500" },
]);

const tracks = ref([
  { name: "Shop 1", category: 0 },
  { name: "Shop 2", category: 0 },
  { name: "Shop 3", category: 0 },
  { name: "Shop 4", category: 0 },
  { name: "Shop 5", category: 0 },
  { name: "Shop 6", category: 0 },
  { name: "Shop 3", category: 0 },
  { name: "Shop 4", category: 1 },
  { name: "Shop 5", category: 1 },
  { name: "Shop 6", category: 1 },
  { name: "Shop 3", category: 2 },
  { name: "Shop 4", category: 2 },
  { name: "Shop 5", category: 2 },
  { name: "Shop 6", category: 2 },
  { name: "Shop 3", category: 2 },
  { name: "Shop 4", category: 1 },
  { name: "Shop 5", category: 3 },
  { name: "Shop 6", category: 3 },
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
