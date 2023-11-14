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
              class="flex justify-between border border-cyan-600 rounded-xl p-2 hover:text-purple-600 cursor-pointer"
              @click="openReadMoreModal(track)"
            >
              <h1
                class="text-lg font-bold text-slate-600 hover:text-purple-600"
              >
                {{ track.name.toUpperCase() }}
              </h1>
              <img src="src/assets/images/next.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- large screen  -->
  <div
    class="flex flex-col justify-center lg:px-24 xl:px-56 3xl:px-80 max-lg:hidden h-screen"
  >
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
            class="flex justify-between border border-cyan-600 rounded-xl p-2 hover:text-purple-600 cursor-pointer"
            @click="openReadMoreModal(track)"
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
  <!-- the track mode  -->
  <div
    v-if="isModalOpen"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
  >
    <div class="bg-white p-4 rounded-md w-1/2">
      <h3 class="text-xl font-semibold mb-2">{{ modalTitle }}</h3>
      <p v-if="modalDetails">{{ modalDetails }}</p>
      <button @click="closeModal" class="text-red-500">close</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const category = ref([
  {
    name: "Trading Strategies",
    color: "bg-gradient-to-r from-cyan-500 to-blue-500",
  },
  {
    name: "Signals services",
    color: "bg-gradient-to-r from-red-500 to-orange-500",
  },
  {
    name: "Live Streamings",
    color: "bg-gradient-to-r from-green-500 to-yellow-500",
  },
  {
    name: "Live streamings",
    color: "bg-gradient-to-r from-purple-500 to-indigo-500",
  },
]);

const tracks = ref([
  { name: "Trend-trading", details: "some details", category: 0 },
  { name: "6 pair hedge", details: "some details", category: 0 },
  { name: "level trading", details: "some details", category: 0 },
  { name: "martingle & griding", details: "some details", category: 0 },
  { name: "miscellaneous/swing", details: "some details", category: 0 },
  { name: "paid client screenshot", details: "some details", category: 1 },
  { name: "investor accounts", details: "some details", category: 1 },
  { name: "hesdge signals - excel", details: "some details", category: 1 },
  { name: "hedge signals - web", details: "some details", category: 1 },
  { name: "xauud - performance ", details: "some details", category: 1 },
  { name: "Shop 3", details: "some details", category: 2 },
  { name: "Shop 4", details: "some details", category: 2 },
  { name: "Shop 5", details: "some details", category: 2 },
  { name: "Shop 6", details: "some details", category: 2 },
  { name: "Shop 3", details: "some details", category: 2 },
  { name: "tab format", details: "some details", category: 1 },
  { name: "web format", details: "some details", category: 3 },
  { name: "Copy trade performance", details: "some details", category: 3 },
]);

const currentCategoryIndex = ref(0);
const selectedTrack = ref(null);
const isModalOpen = ref(false);
const modalTitle = ref("");
const modalDetails = ref("");

const selectCategory = (categoryIndex) => {
  currentCategoryIndex.value = categoryIndex;
  selectedTrack.value = null;
};

const openReadMoreModal = (track) => {
  selectedTrack.value = track;
  isModalOpen.value = true;
  modalTitle.value = track.name;
  modalDetails.value = track.details;
  // Implement modal opening logic here
};

const closeModal = () => {
  isModalOpen.value = false;
  modalTitle.value = "";
};

const displayedTracks = computed(() => {
  return tracks.value.filter(
    (track) => track.category === currentCategoryIndex.value
  );
});
</script>
