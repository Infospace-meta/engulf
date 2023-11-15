<template>
  <div class="flex flex-col mx-auto max-w-6xl lg:flex-row">
    <div class="mx-auto flex flex-col justify-center">
      <h1 class="text-3xl">Let’s connect!</h1>
      <p class="text-lg">
        On Pinterest, inspiration comes in the form of great content from
        creators like you. And we really value your feedback. WDYT? We’d love to
        hear from you!
      </p>
    </div>
    <div class="w-1/2 p-40">
      <div
        class="flex lg:flex-row flex-col gap-5 items-center justify-center py-2"
      >
        <div class="flex flex-col">
          <p>First Name</p>
          <input
            type="text"
            placeholder="John"
            class="border border-gray-400 p-2 rounded-md"
          />
        </div>
        <div class="flex flex-col">
          <p>Sir name</p>
          <input
            type="text"
            placeholder="Doe"
            class="border border-gray-400 p-2 rounded-md"
          />
        </div>
      </div>
      <div
        class="flex lg:flex-row flex-col gap-5 items-center justify-center py-2"
      >
        <div class="flex flex-col">
          <p>E-mail</p>
          <input
            type="email"
            placeholder="example@gmail.com"
            class="border border-gray-400 p-2 rounded-md"
          />
        </div>
        <div class="flex flex-col">
          <p>Phone number</p>
          <input
            type="text"
            placeholder="+254"
            class="border border-gray-400 p-2 rounded-md"
          />
        </div>
      </div>
      <div class="flex flex-col pt-2 lg:px-16">
        <textarea
          placeholder="Comments"
          class="w-auto h-auto border border-gray-400 p-4 rounded-md"
          style="resize: vertical; min-height: 50px; max-height: 100px"
          v-model="shopDescription"
          @input="checkWordCount"
        ></textarea>
        <p class="text-gray-600">{{ wordCount }}/100 words</p>
      </div>
      <div class="flex justify-end">
        <button class="bg-green-700 text-white py-1 px-3 rounded-md">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const shopDescription = ref("");
const wordCount = ref(0);
const maxWords = 100;

const checkWordCount = () => {
  const words = shopDescription.value
    .split(/\s+/)
    .filter((word) => word !== "");
  wordCount.value = words.length;
  if (wordCount.value > maxWords) {
    // Trim the text to the first 500 words
    shopDescription.value = words.slice(0, maxWords).join(" ");
  }
};
</script>
