<!-- <template>
  <div class="px-5 lg:px-96">
    <div class="grid grid-cols-4 gap-5">
      <div
        @click="selectCategory(catIndex)"
        v-for="(cat, catIndex) in category"
        :key="catIndex"
      >
        <h1
          :class="cat.color"
          class="border rounded-xl text-white text-3xl p-10 flex flex-wrap"
        >
          {{ cat.name }}
        </h1>
      </div>
    </div>
    <div class="bg-slate-50 rounded-lg shadow-xl border-2 mt-5 p-10">
      <div class="grid lg:grid-cols-2 gap-3">
        <div v-for="(shop, shopIndex) in displayedShops" :key="shopIndex">
          <div
            class="flex justify-between border border-cyan-600 rounded-xl p-2"
          >
            <h1 class="text-lg">{{ shop.name }}</h1>
            <img src="src/assets/images/info.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template> -->

<template>
  <div class="px-5 lg:px-96">
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
      </div>
    </div>
    <div class="bg-slate-50 rounded-lg shadow-xl border-2 mt-5 p-10 relative">
      <h1 class="">
        {{ category[currentCategoryIndex].name }}
      </h1>
      <div class="grid lg:grid-cols-2 gap-3">
        <div v-for="(shop, shopIndex) in displayedShops" :key="shopIndex">
          <div
            class="flex justify-between border border-cyan-600 rounded-xl p-2"
          >
            <h1 class="text-lg">{{ shop.name }}</h1>
            <img src="src/assets/images/info.png" />
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
  { name: "Category 1", color: "bg-red-500" },
  { name: "Category 4", color: "bg-indigo-500" },
  { name: "Category 2", color: "bg-green-500" },
  { name: "Category 3", color: "bg-blue-500" },
]);

const shops = ref([
  { name: "Shop 1", category: 0 },
  { name: "Shop 2", category: 0 },
  { name: "Shop 3", category: 0 },
  { name: "Shop 4", category: 1 },
  { name: "Shop 5", category: 2 },
  { name: "Shop 6", category: 3 },
  { name: "Shop 3", category: 0 },
  { name: "Shop 4", category: 3 },
  { name: "Shop 5", category: 2 },
  { name: "Shop 6", category: 3 },
  { name: "Shop 3", category: 0 },
  { name: "Shop 4", category: 1 },
  { name: "Shop 5", category: 3 },
  { name: "Shop 6", category: 3 },
  { name: "Shop 3", category: 0 },
  { name: "Shop 4", category: 1 },
  { name: "Shop 5", category: 2 },
  { name: "Shop 6", category: 3 },
]);

let currentCategoryIndex = ref(0); // Initialize with the first category

const selectCategory = (categoryIndex) => {
  currentCategoryIndex.value = categoryIndex;
};

const displayedShops = computed(() => {
  return shops.value.filter(
    (shop) => shop.category === currentCategoryIndex.value
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
