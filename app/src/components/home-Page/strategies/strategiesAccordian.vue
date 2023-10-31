<template>
  <div class="grid grid-cols-4 gap-5 px-96">
    <div @click="openModal" v-for="(cat, catIndex) in category" :key="catIndex">
      <h1 :class="cat.color" class="border rounded-xl text-white text-3xl p-10">
        {{ cat.name }}
      </h1>
    </div>
    <StrategyModal
      v-if="isModalOpen"
      v-for="(modal, modalIndex) in getModalByCategory(catIndex)"
      :key="modalIndex"
      :modal="modal"
    />
  </div>
</template>

<script setup>
import StrategyModal from "./strategiesModal.vue";
import { ref } from "vue";

const category = ref([
  { name: "Category 1", color: "bg-red-500" },
  { name: "Category 4", color: "bg-indigo-500" },
  { name: "Category 2", color: "bg-green-500" },
  { name: "Category 3", color: "bg-blue-500" },
]);

const modals = ref([
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

const isModalOpen = ref(true);

const openModal = () => {
  modals.name = "";
  isModalOpen.value = true;
};
const getModalByCategory = (categoryIndex) => {
  return modals.value.filter((modal) => modal.category === categoryIndex);
};
</script>
