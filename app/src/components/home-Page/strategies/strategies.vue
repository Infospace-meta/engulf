<template>
  <div class="">
    <div
      class="grid grid-cols-4 divide-y divide-neutral-200 max-w-xl mx-auto mt-8"
    >
      <div v-for="(cat, catIndex) in category" :key="catIndex">
        <div class="py-5">
          <details class="group" @click="toggleCategory(catIndex)">
            <summary
              class="flex justify-between items-center font-medium cursor-pointer list-none"
            >
              <span>{{ cat.name }}</span>
              <span
                :class="{ 'group-open:rotate-180': openCategories[catIndex] }"
              >
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div
              class="text-neutral-600 bg-slate-50 mt-3 group-open:animate-fadeIn absolute left-96 z-10 w-[700px]"
              v-show="openCategories[catIndex]"
            >
              <div class="grid grid-cols-2 gap-3">
                <div
                  v-for="(shop, shopIndex) in getShopsByCategory(catIndex)"
                  :key="shopIndex"
                >
                  <div
                    class="flex justify-between border border-cyan-600 rounded-xl p-2"
                  >
                    <h1 class="text-lg">{{ shop.name }}</h1>
                    <img src="src/assets/images/info.png" />
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const category = ref([
  { name: "Category 1", color: "bg-red-500" },
  { name: "Category 4", color: "bg-indigo-500" },
  { name: "Category 2", color: "bg-green-500" },
  { name: "Category 3", color: "bg-blue-500" },
]);

const shops = ref([
  { name: "indicator based signals", category: 0 },
  { name: "indicator based signals", category: 0 },
  { name: "indicator based signals", category: 0 },
  { name: "indicator based signals", category: 0 },
  { name: "indicator based signals", category: 0 },
  { name: "indicator based signals", category: 0 },
  { name: "indicator based signals", category: 0 },
  { name: "indicator based signals", category: 0 },
  { name: "indicator based signals", category: 0 },
  { name: "indicator based signals", category: 0 },
  { name: "indicator based signals", category: 0 },
  { name: "indicator based signals", category: 0 },
  { name: "indicator based signals", category: 1 },
  { name: "indicator based signals", category: 2 },
  { name: "indicator based signals", category: 3 },
]);

const openCategories = ref(Array(category.value.length).fill(false));

const toggleCategory = (catIndex) => {
  openCategories.value = openCategories.value.map(
    (_, index) => index === catIndex
  );
};

const getShopsByCategory = (categoryIndex) => {
  return shops.value.filter((shop) => shop.category === categoryIndex);
};
</script>
