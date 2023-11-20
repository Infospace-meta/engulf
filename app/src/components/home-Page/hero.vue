<template>
  <div
    class="flex flex-col-reverse lg:flex-row lg:justify-center lg:items-center h-screen pattern-plus-red-50/100"
  >
    <div class="">
      <h1 class="text-5xl font-semibold">
        It's time to elevate <br />your<span class="text-red-500">
          financial future</span
        >
      </h1>
      <p class="py-5 text-lg">
        Discover a world of financial opportunities with Pro Forex Investments.
      </p>
      <div class="flex gap-5">
        <router-link
          :to="{ name: 'home' }"
          class="bg-slate-400 text-white p-2 rounded-md"
          >Enroll with Us</router-link
        >
        <router-link
          :to="{ name: 'home' }"
          class="bg-red-500 text-white p-2 rounded-md"
          >Contact</router-link
        >
      </div>
    </div>
    <div>
      <img
        src="src/assets/images/heroImage.jpg"
        alt="heroImage"
        class="h-76 lg:h-96"
      />
    </div>
  </div>
</template>

<script setup></script>
