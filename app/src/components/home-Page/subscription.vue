<template>
  <div class="flex flex-row justify-center items-center min-h-screen">
    <div
      class="rounded-xl flex flex-col lg:flex-row gap-10 items-center justify-center"
    >
      <div
        v-for="(card, cardIndex) in cards"
        :key="cardIndex"
        class="shadow-2xl rounded-b-xl w-56"
      >
        <div
          class="bg-gradient-to-r from-cyan-500 to-blue-500 p-10 rounded-t-xl shadow-lg"
        >
          <h1 class="text-xl text-white">{{ card.title.toUpperCase() }}</h1>
        </div>
        <div class="flex items-center justify-center p-5 bg-slate-50">
          <p class="text-lg text-slate-600">{{ card.content }}</p>
        </div>
        <div class="border-t border-slate-300 w-5/6 flex mx-4"></div>
        <div class="flex items-center justify-center p-5 bg-slate-50">
          <p class="text-md">{{ card.terms }}</p>
        </div>
        <div class="border-t border-slate-300 w-5/6 flex mx-4"></div>
        <div
          class="flex items-center justify-center p-5 rounded-b-xl bg-slate-50"
        >
          <button
            class="bg-gradient-to-r from-red-700 to-red-500 text-white py-1 px-5 rounded-md"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const cards = ref([
  {
    title: "Focal calendar signals",
    content: "Capital Size: 500 to 1000 USD",
    terms: "Weekly 20% to 50% return",
  },
  {
    title: "premium calendar signals",
    content: "Capital Size: 500 to 1000 USD",
    terms: "Weekly 30% to 70% return",
  },
  {
    title: "platinum calendar signals",
    content: "Capital Size: 500 to 1000 USD",
    terms: "Weekly 40% to 100% return",
  },
]);
</script>
